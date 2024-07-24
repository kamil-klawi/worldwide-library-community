package com.worldwide.library_community.controllers;

import com.worldwide.library_community.domain.dtos.AuthorDto;
import com.worldwide.library_community.domain.dtos.AuthorExtendedDto;
import com.worldwide.library_community.services.impl.AuthorServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/authors")
@RequiredArgsConstructor
public class AuthorController {
    private final AuthorServiceImpl authorService;

    @GetMapping("/all/details")
    public ResponseEntity<Page<AuthorExtendedDto>> findAllExtendedAuthors(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "4") int size
    ) {
        return ResponseEntity.ok(authorService.findAllExtendedAuthors(page, size));
    }

    @GetMapping("/all")
    public ResponseEntity<Page<AuthorDto>> findAllAuthors(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "4") int size
    ) {
        return ResponseEntity.ok(authorService.findAllAuthors(page, size));
    }

    @GetMapping(path = "/{authorId}")
    public ResponseEntity<Optional<AuthorDto>> findAuthorById(@PathVariable Long authorId) {
        if (authorService.isAuthorNonExist(authorId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(authorService.findAuthorById(authorId));
    }

    @GetMapping
    public ResponseEntity<List<AuthorDto>> findAuthorsByName(@RequestParam String firstName) {
        return ResponseEntity.ok(authorService.findAuthorsByName(firstName));
    }

    @PostMapping(path = "/create")
    public ResponseEntity<AuthorDto> createAuthor(@RequestBody AuthorDto authorDto) {
        return ResponseEntity.ok(authorService.createAuthor(authorDto));
    }

    @PutMapping(path = "/{authorId}")
    public ResponseEntity<AuthorDto> updateAuthor(
            @PathVariable Long authorId,
            @RequestBody AuthorDto authorDto
    ) {
        if (authorService.isAuthorNonExist(authorId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(authorService.updateAuthor(authorId, authorDto));
    }

    @PatchMapping(path = "/{authorId}")
    public ResponseEntity<AuthorDto> partialUpdateAuthor(
            @PathVariable Long authorId,
            @RequestBody AuthorDto authorDto
    ) {
        if (authorService.isAuthorNonExist(authorId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(authorService.partialUpdateAuthor(authorId, authorDto));
    }

    @DeleteMapping(path = "/{authorId}")
    public ResponseEntity removeAuthor(@PathVariable Long authorId) {
        if (authorService.isAuthorNonExist(authorId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        authorService.removeAuthor(authorId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
