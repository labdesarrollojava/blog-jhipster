package es.lab.blog.aop.company;

import es.lab.blog.repository.EntryRepository;
import es.lab.blog.security.SecurityUtils;
import es.lab.blog.repository.UserRepository;
import es.lab.blog.domain.User;
import es.lab.blog.domain.Entry;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.hibernate.Filter;
import java.util.Optional;
import java.util.NoSuchElementException;

@Aspect
@Component
public class EntryAspect {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EntryRepository entryRepository;

    /**
     * Run method if Entry repository save is hit.
     * Adds tenant information to entity.
     */
    @Before(value = "execution(* es.lab.blog.repository.EntryRepository.save(..)) && args(entry, ..)")
    public void onSave(JoinPoint joinPoint, Entry entry) {
        Optional<String> login = SecurityUtils.getCurrentUserLogin();

        if(login.isPresent()) {
            User loggedInUser = userRepository.findOneByLogin(login.get()).get();

            if (loggedInUser.getCompany() != null) {
                entry.setCompany(loggedInUser.getCompany());
            }
        }
    }

    /**
     * Run method if Entry service findOne is hit.
     * Adds filtering to prevent display of information from another tenant
     */
    @Before(value = "execution(* es.lab.blog.service.EntryService.findOne(..)) && args(id, ..)")
    public void onFindOne(JoinPoint joinPoint, Long id) throws Exception {
        Optional<String> login = SecurityUtils.getCurrentUserLogin();

        if(login.isPresent())
        {
            User loggedInUser = userRepository.findOneByLogin(login.get()).get();

            if (loggedInUser.getCompany() != null) {
                Entry entry = entryRepository.findById(id).get();
                if(entry.getCompany() != loggedInUser.getCompany()){
                    throw new NoSuchElementException();
                }
            }
        }
    }
}
