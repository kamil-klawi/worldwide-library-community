package com.worldwide.library_community.mappers.impl;

import com.worldwide.library_community.domain.dtos.BookDto;
import com.worldwide.library_community.domain.entities.Book;
import com.worldwide.library_community.mappers.Mapper;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BookMapper implements Mapper<Book, BookDto> {
    private final ModelMapper modelMapper;

    @Override
    public BookDto mapEntityToDto(Book book) {
        return modelMapper.map(book, BookDto.class);
    }

    @Override
    public Book mapDtoToEntity(BookDto bookDto) {
        return modelMapper.map(bookDto, Book.class);
    }
}
