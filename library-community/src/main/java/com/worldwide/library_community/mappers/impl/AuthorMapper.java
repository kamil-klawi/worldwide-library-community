package com.worldwide.library_community.mappers.impl;

import com.worldwide.library_community.domain.dtos.AuthorDto;
import com.worldwide.library_community.domain.entities.Author;
import com.worldwide.library_community.mappers.Mapper;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthorMapper implements Mapper<Author, AuthorDto> {
    private final ModelMapper modelMapper;

    @Override
    public AuthorDto mapEntityToDto(Author author) {
        return modelMapper.map(author, AuthorDto.class);
    }

    @Override
    public Author mapDtoToEntity(AuthorDto authorDto) {
        return modelMapper.map(authorDto, Author.class);
    }
}
