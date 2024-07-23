package com.worldwide.library_community.services.impl;

import com.worldwide.library_community.domain.dtos.BookDto;
import com.worldwide.library_community.domain.entities.Author;
import com.worldwide.library_community.domain.entities.Book;
import com.worldwide.library_community.domain.entities.Translator;
import com.worldwide.library_community.mappers.impl.BookMapper;
import com.worldwide.library_community.repositories.AuthorRepository;
import com.worldwide.library_community.repositories.BookRepository;
import com.worldwide.library_community.repositories.TranslatorRepository;
import com.worldwide.library_community.services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final TranslatorRepository translatorRepository;
    private final BookMapper bookMapper;

    @Override
    public Page<BookDto> findAllBooks(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Book> books = bookRepository.findAll(pageable);
        return books.map(bookMapper::mapEntityToDto);
    }

    @Override
    public Optional<BookDto> findBookById(Long id) {
        Optional<Book> book = bookRepository.findById(id);
        return book.map(bookMapper::mapEntityToDto);
    }

    @Override
    public Optional<BookDto> findBookByTitle(String title) {
        Optional<Book> book = bookRepository.findBookByTitle(title);
        return book.map(bookMapper::mapEntityToDto);
    }

    @Override
    public BookDto createBook(BookDto bookDto) {
        Book book = bookMapper.mapDtoToEntity(bookDto);
        var savedBook = bookRepository.save(book);
        return bookMapper.mapEntityToDto(savedBook);
    }

    @Override
    public BookDto updateBook(Long id, BookDto bookDto) {
        bookDto.setId(id);
        Book book = bookMapper.mapDtoToEntity(bookDto);
        var savedBook = bookRepository.save(book);
        return bookMapper.mapEntityToDto(savedBook);
    }

    @Override
    public BookDto assignAuthorToBook(Long bookId, Long authorId) {
        Book book = bookRepository.findById(bookId).get();
        Author author = authorRepository.findById(authorId).get();
        book.setAuthor(author);
        var savedBook = bookRepository.save(book);
        return bookMapper.mapEntityToDto(savedBook);
    }

    @Override
    public BookDto assignTranslatorToBook(Long bookId, Long translatorId) {
        Book book = bookRepository.findById(bookId).get();
        Translator translator = translatorRepository.findById(translatorId).get();
        book.setTranslator(translator);
        var savedBook = bookRepository.save(book);
        return bookMapper.mapEntityToDto(savedBook);
    }

    @Override
    public BookDto partialUpdateBook(Long id, BookDto bookDto) {
        bookDto.setId(id);
        Book book = bookMapper.mapDtoToEntity(bookDto);
        return bookRepository.findById(id).map(b -> {
            Optional.ofNullable(book.getTitle()).ifPresent(b::setTitle);
            Optional.ofNullable(book.getPublishingHouse()).ifPresent(b::setPublishingHouse);
            Optional.ofNullable(book.getLanguageOriginal()).ifPresent(b::setLanguageOriginal);
            Optional.ofNullable(book.getLanguageReleased()).ifPresent(b::setLanguageReleased);
            Optional.ofNullable(book.getNumberOfPages()).ifPresent(b::setNumberOfPages);
            Optional.ofNullable(book.getPublicationDate()).ifPresent(b::setPublicationDate);
            Optional.ofNullable(book.getType()).ifPresent(b::setType);
            Optional.ofNullable(book.getCover()).ifPresent(b::setCover);
            Optional.ofNullable(book.getHeight()).ifPresent(b::setHeight);
            Optional.ofNullable(book.getWidth()).ifPresent(b::setWidth);
            Optional.ofNullable(book.getDepth()).ifPresent(b::setDepth);
            Optional.ofNullable(book.getAuthor()).ifPresent(b::setAuthor);
            Optional.ofNullable(book.getTranslator()).ifPresent(b::setTranslator);
            var savedBook = bookRepository.save(b);
            return bookMapper.mapEntityToDto(savedBook);
        }).orElseThrow(() -> new RuntimeException("Book does not exist"));
    }

    @Override
    public void removeBook(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public boolean isBookNonExist(Long id) {
        return !bookRepository.existsById(id);
    }
}
