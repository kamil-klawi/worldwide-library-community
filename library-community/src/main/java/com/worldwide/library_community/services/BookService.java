package com.worldwide.library_community.services;

import com.worldwide.library_community.domain.dtos.BookDto;
import org.springframework.data.domain.Page;

import java.util.Optional;

public interface BookService {
    Page<BookDto> findAllBooks(int page, int size);
    Optional<BookDto> findBookById(Long id);
    Optional<BookDto> findBookByTitle(String title);
    BookDto createBook(BookDto bookDto);
    BookDto updateBook(Long id, BookDto bookDto);
    BookDto assignAuthorToBook(Long bookId, Long authorId);
    BookDto assignTranslatorToBook(Long bookId, Long translatorId);
    BookDto partialUpdateBook(Long id, BookDto bookDto);
    void removeBook(Long id);
    boolean isBookNonExist(Long id);
}
