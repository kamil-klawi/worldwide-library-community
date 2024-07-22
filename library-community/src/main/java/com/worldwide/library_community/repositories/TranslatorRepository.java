package com.worldwide.library_community.repositories;

import com.worldwide.library_community.domain.entities.Translator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TranslatorRepository extends JpaRepository<Translator, Long> {
    @Query("SELECT t FROM Translator t WHERE t.firstName = :firstName")
    List<Translator> findTranslatorsByName(@Param("firstName") String firstName);
}
