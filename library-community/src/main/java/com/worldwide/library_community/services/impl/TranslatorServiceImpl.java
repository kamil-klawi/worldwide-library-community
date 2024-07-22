package com.worldwide.library_community.services.impl;

import com.worldwide.library_community.domain.dtos.TranslatorDto;
import com.worldwide.library_community.domain.entities.Translator;
import com.worldwide.library_community.mappers.impl.TranslatorMapper;
import com.worldwide.library_community.repositories.TranslatorRepository;
import com.worldwide.library_community.services.TranslatorService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TranslatorServiceImpl implements TranslatorService {
    private final TranslatorRepository translatorRepository;
    private final TranslatorMapper translatorMapper;

    @Override
    public Page<TranslatorDto> findAllTranslators(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Translator> translator = translatorRepository.findAll(pageable);
        return translator.map(translatorMapper::mapEntityToDto);
    }

    @Override
    public Optional<TranslatorDto> findTranslatorById(Long id) {
        Optional<Translator> translator = translatorRepository.findById(id);
        return translator.map(translatorMapper::mapEntityToDto);
    }

    @Override
    public List<TranslatorDto> findTranslatorsByName(String firstName) {
        List<Translator> translators = translatorRepository.findTranslatorsByName(firstName);
        return translators.stream().map(translatorMapper::mapEntityToDto).collect(Collectors.toList());
    }

    @Override
    public TranslatorDto createTranslator(TranslatorDto translatorDto) {
        Translator translator = translatorMapper.mapDtoToEntity(translatorDto);
        var savedTranslator = translatorRepository.save(translator);
        return translatorMapper.mapEntityToDto(savedTranslator);
    }

    @Override
    public TranslatorDto updateTranslator(Long id, TranslatorDto translatorDto) {
        translatorDto.setId(id);
        Translator translator = translatorMapper.mapDtoToEntity(translatorDto);
        var savedTranslator = translatorRepository.save(translator);
        return translatorMapper.mapEntityToDto(savedTranslator);
    }

    @Override
    public TranslatorDto partialUpdateTranslator(Long id, TranslatorDto translatorDto) {
        translatorDto.setId(id);
        Translator translator = translatorMapper.mapDtoToEntity(translatorDto);
        return translatorRepository.findById(id).map(t -> {
            Optional.ofNullable(translator.getFirstName()).ifPresent(t::setFirstName);
            Optional.ofNullable(translator.getSecondName()).ifPresent(t::setSecondName);
            Optional.ofNullable(translator.getLastName()).ifPresent(t::setLastName);
            var savedTranslator = translatorRepository.save(t);
            return translatorMapper.mapEntityToDto(savedTranslator);
        }).orElseThrow(() -> new RuntimeException("Translator does not exist"));
    }

    @Override
    public void removeTranslator(Long id) {
        translatorRepository.deleteById(id);
    }

    @Override
    public boolean isTranslatorNonExist(Long id) {
        return !translatorRepository.existsById(id);
    }
}
