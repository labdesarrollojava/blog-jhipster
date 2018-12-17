package es.lab.blog.service;

import es.lab.blog.domain.Entry;
import es.lab.blog.repository.EntryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing Entry.
 */
@Service
@Transactional
public class EntryService {

    private final Logger log = LoggerFactory.getLogger(EntryService.class);

    private final EntryRepository entryRepository;

    public EntryService(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    /**
     * Save a entry.
     *
     * @param entry the entity to save
     * @return the persisted entity
     */
    public Entry save(Entry entry) {
        log.debug("Request to save Entry : {}", entry);
        return entryRepository.save(entry);
    }

    /**
     * Get all the entries.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Transactional(readOnly = true)
    public Page<Entry> findAll(Pageable pageable) {
        log.debug("Request to get all Entries");
        return entryRepository.findAll(pageable);
    }

    /**
     * Get all the Entry with eager load of many-to-many relationships.
     *
     * @return the list of entities
     */
    public Page<Entry> findAllWithEagerRelationships(Pageable pageable) {
        return entryRepository.findAllWithEagerRelationships(pageable);
    }
    

    /**
     * Get one entry by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<Entry> findOne(Long id) {
        log.debug("Request to get Entry : {}", id);
        return entryRepository.findOneWithEagerRelationships(id);
    }

    /**
     * Delete the entry by id.
     *
     * @param id the id of the entity
     */
    public void delete(Long id) {
        log.debug("Request to delete Entry : {}", id);
        entryRepository.deleteById(id);
    }
}
