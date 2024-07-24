package com.worldwide.library_community.controllers;

import com.worldwide.library_community.domain.dtos.BookDto;
import com.worldwide.library_community.services.impl.BookServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/books")
@RequiredArgsConstructor
public class BookController {
    private final BookServiceImpl bookService;

    @GetMapping("/all")
    public ResponseEntity<Page<BookDto>> findAllBooks(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "4") int size
    ) {
        return ResponseEntity.ok(bookService.findAllBooks(page, size));
    }

    @GetMapping(path = "/{bookId}")
    public ResponseEntity<Optional<BookDto>> findBookById(@PathVariable Long bookId) {
        if (bookService.isBookNonExist(bookId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(bookService.findBookById(bookId));
    }

    @GetMapping
    public ResponseEntity<Optional<BookDto>> findBookByTitle(@RequestParam String title) {
        return ResponseEntity.ok(bookService.findBookByTitle(title));
    }

    @PostMapping(path = "/create")
    public ResponseEntity<BookDto> createBook(@RequestBody BookDto bookDto) {
        return ResponseEntity.ok(bookService.createBook(bookDto));
    }

    @PutMapping(path = "/{bookId}")
    public ResponseEntity<BookDto> updateBook(
            @PathVariable Long bookId,
            @RequestBody BookDto bookDto
    ) {
        if (bookService.isBookNonExist(bookId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(bookService.updateBook(bookId, bookDto));
    }

    @PutMapping("/{bookId}/author/{authorId}")
    public ResponseEntity<BookDto> assignAuthorToBook(
            @PathVariable Long bookId,
            @PathVariable Long authorId
    ){
        return ResponseEntity.ok(bookService.assignAuthorToBook(bookId, authorId));
    }

    @PutMapping("/{bookId}/translator/{translatorId}")
    public ResponseEntity<BookDto> assignTranslatorToBook(
            @PathVariable Long bookId,
            @PathVariable Long translatorId
    ){
        return ResponseEntity.ok(bookService.assignTranslatorToBook(bookId, translatorId));
    }

    @PatchMapping(path = "/{bookId}")
    public ResponseEntity<BookDto> partialUpdateBook(
            @PathVariable Long bookId,
            @RequestBody BookDto bookDto
    ) {
        if (bookService.isBookNonExist(bookId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(bookService.partialUpdateBook(bookId, bookDto));
    }

    @DeleteMapping(path = "/{bookId}")
    public ResponseEntity removeBook(@PathVariable Long bookId) {
        if (bookService.isBookNonExist(bookId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        bookService.removeBook(bookId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
