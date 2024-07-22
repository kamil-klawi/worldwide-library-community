package com.worldwide.library_community.services;

import com.worldwide.library_community.domain.dtos.AuthorDto;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface AuthorService {
    Page<AuthorDto> findAllAuthors(int page, int size);
    Optional<AuthorDto> findAuthorById(Long id);
    List<AuthorDto> findAuthorsByName(String firstName);
    AuthorDto createAuthor(AuthorDto authorDTO);
    AuthorDto updateAuthor(Long id, AuthorDto authorDTO);
    AuthorDto partialUpdateAuthor(Long id, AuthorDto authorDTO);
    void removeAuthor(Long id);
    boolean isAuthorNonExist(Long id);
}
