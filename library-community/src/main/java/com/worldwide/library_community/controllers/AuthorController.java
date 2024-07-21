package com.worldwide.library_community.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/authors")
@RequiredArgsConstructor
public class AuthorController {

    @GetMapping
    public ResponseEntity<String> findAllAuthors() {
        return ResponseEntity.ok("George Orwell, Anthony Doerr");
    }
}
