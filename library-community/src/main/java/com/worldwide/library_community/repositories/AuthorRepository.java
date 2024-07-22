package com.worldwide.library_community.repositories;

import com.worldwide.library_community.domain.entities.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
    @Query("SELECT a FROM Author a WHERE a.firstName = :firstName")
    List<Author> findAuthorsByName(@Param("firstName") String firstName);
}
