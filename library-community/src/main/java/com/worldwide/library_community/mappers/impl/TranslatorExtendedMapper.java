package com.worldwide.library_community.mappers.impl;

import com.worldwide.library_community.domain.dtos.TranslatorExtendedDto;
import com.worldwide.library_community.domain.entities.Translator;
import com.worldwide.library_community.mappers.Mapper;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TranslatorExtendedMapper implements Mapper<Translator, TranslatorExtendedDto> {
    private final ModelMapper modelMapper;

    @Override
    public TranslatorExtendedDto mapEntityToDto(Translator translator) {
        return modelMapper.map(translator, TranslatorExtendedDto.class);
    }

    @Override
    public Translator mapDtoToEntity(TranslatorExtendedDto translatorExtendedDto) {
        return modelMapper.map(translatorExtendedDto, Translator.class);
    }
}
