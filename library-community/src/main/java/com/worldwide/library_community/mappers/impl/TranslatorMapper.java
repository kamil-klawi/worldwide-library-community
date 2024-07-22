package com.worldwide.library_community.mappers.impl;

import com.worldwide.library_community.domain.dtos.TranslatorDto;
import com.worldwide.library_community.domain.entities.Translator;
import com.worldwide.library_community.mappers.Mapper;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class TranslatorMapper implements Mapper<Translator, TranslatorDto> {
    private final ModelMapper modelMapper;

    @Override
    public TranslatorDto mapEntityToDto(Translator translator) {
        return modelMapper.map(translator, TranslatorDto.class);
    }

    @Override
    public Translator mapDtoToEntity(TranslatorDto translatorDto) {
        return modelMapper.map(translatorDto, Translator.class);
    }
}
