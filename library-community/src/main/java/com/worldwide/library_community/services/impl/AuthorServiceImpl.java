package com.worldwide.library_community.services.impl;

import com.worldwide.library_community.domain.dtos.AuthorDto;
import com.worldwide.library_community.domain.entities.Author;
import com.worldwide.library_community.mappers.Mapper;
import com.worldwide.library_community.repositories.AuthorRepository;
import com.worldwide.library_community.services.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthorServiceImpl implements AuthorService {
    private final AuthorRepository authorRepository;
    private final Mapper<Author, AuthorDto> authorMapper;

    @Override
    public Page<AuthorDto> findAllAuthors(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Author> authors = authorRepository.findAll(pageable);
        return authors.map(authorMapper::mapEntityToDto);
    }

    @Override
    public Optional<AuthorDto> findAuthorById(Long id) {
        Optional<Author> author = authorRepository.findById(id);
        return author.map(authorMapper::mapEntityToDto);
    }

    @Override
    public List<AuthorDto> findAuthorsByName(String firstName) {
        List<Author> authors = authorRepository.findAuthorsByName(firstName);
        return authors.stream().map(authorMapper::mapEntityToDto).collect(Collectors.toList());
    }

    @Override
    public AuthorDto createAuthor(AuthorDto authorDTO) {
        Author author = authorMapper.mapDtoToEntity(authorDTO);
        var savedAuthor = authorRepository.save(author);
        return authorMapper.mapEntityToDto(savedAuthor);
    }

    @Override
    public AuthorDto updateAuthor(Long id, AuthorDto authorDTO) {
        authorDTO.setId(id);
        Author author = authorMapper.mapDtoToEntity(authorDTO);
        var savedAuthor = authorRepository.save(author);
        return authorMapper.mapEntityToDto(savedAuthor);
    }

    @Override
    public AuthorDto partialUpdateAuthor(Long id, AuthorDto authorDTO) {
        authorDTO.setId(id);
        Author author = authorMapper.mapDtoToEntity(authorDTO);
        return authorRepository.findById(id).map(a -> {
            Optional.ofNullable(author.getFirstName()).ifPresent(a::setFirstName);
            Optional.ofNullable(author.getSecondName()).ifPresent(a::setSecondName);
            Optional.ofNullable(author.getLastName()).ifPresent(a::setLastName);
            var savedAuthor = authorRepository.save(a);
            return authorMapper.mapEntityToDto(savedAuthor);
        }).orElseThrow(() -> new RuntimeException("Author does not exist"));
    }

    @Override
    public void removeAuthor(Long id) {
        authorRepository.deleteById(id);
    }

    @Override
    public boolean isAuthorNonExist(Long id) {
        return !authorRepository.existsById(id);
    }
}
