package es.lab.blog.service;

import es.lab.blog.domain.Blog;
import es.lab.blog.repository.BlogRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing Blog.
 */
@Service
@Transactional
public class BlogService {

    private final Logger log = LoggerFactory.getLogger(BlogService.class);

    private final BlogRepository blogRepository;

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    /**
     * Save a blog.
     *
     * @param blog the entity to save
     * @return the persisted entity
     */
    public Blog save(Blog blog) {
        log.debug("Request to save Blog : {}", blog);
        return blogRepository.save(blog);
    }

    /**
     * Get all the blogs.
     *
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public List<Blog> findAll() {
        log.debug("Request to get all Blogs");
        return blogRepository.findAll();
    }


    /**
     * Get one blog by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<Blog> findOne(Long id) {
        log.debug("Request to get Blog : {}", id);
        return blogRepository.findById(id);
    }

    /**
     * Delete the blog by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Blog : {}", id);
        blogRepository.deleteById(id);
    }
}
