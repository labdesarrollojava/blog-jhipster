package es.lab.blog.aop.company;

import es.lab.blog.repository.TagRepository;
import es.lab.blog.security.SecurityUtils;
import es.lab.blog.repository.UserRepository;
import es.lab.blog.domain.User;
import es.lab.blog.domain.Tag;
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
public class TagAspect {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TagRepository tagRepository;

    /**
     * Run method if Tag repository save is hit.
     * Adds tenant information to entity.
     */
    @Before(value = "execution(* es.lab.blog.repository.TagRepository.save(..)) && args(tag, ..)")
    public void onSave(JoinPoint joinPoint, Tag tag) {
        Optional<String> login = SecurityUtils.getCurrentUserLogin();

        if(login.isPresent()) {
            User loggedInUser = userRepository.findOneByLogin(login.get()).get();

            if (loggedInUser.getCompany() != null) {
                tag.setCompany(loggedInUser.getCompany());
            }
        }
    }

    /**
     * Run method if Tag service findOne is hit.
     * Adds filtering to prevent display of information from another tenant
     */
    @Before(value = "execution(* es.lab.blog.service.TagService.findOne(..)) && args(id, ..)")
    public void onFindOne(JoinPoint joinPoint, Long id) throws Exception {
        Optional<String> login = SecurityUtils.getCurrentUserLogin();

        if(login.isPresent())
        {
            User loggedInUser = userRepository.findOneByLogin(login.get()).get();

            if (loggedInUser.getCompany() != null) {
                Tag tag = tagRepository.findById(id).get();
                if(tag.getCompany() != loggedInUser.getCompany()){
                    throw new NoSuchElementException();
                }
            }
        }
    }
}
