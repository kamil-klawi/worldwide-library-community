package com.worldwide.library_community.mappers.impl;

import com.worldwide.library_community.domain.dtos.AuthorExtendedDto;
import com.worldwide.library_community.domain.entities.Author;
import com.worldwide.library_community.mappers.Mapper;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthorExtendedMapper implements Mapper<Author, AuthorExtendedDto> {
    private final ModelMapper modelMapper;

    @Override
    public AuthorExtendedDto mapEntityToDto(Author author) {
        return modelMapper.map(author, AuthorExtendedDto.class);
    }

    @Override
    public Author mapDtoToEntity(AuthorExtendedDto authorExtendedDto) {
        return modelMapper.map(authorExtendedDto, Author.class);
    }
}
