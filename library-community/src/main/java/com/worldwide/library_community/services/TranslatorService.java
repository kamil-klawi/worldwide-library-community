package com.worldwide.library_community.services;

import com.worldwide.library_community.domain.dtos.TranslatorDto;
import com.worldwide.library_community.domain.dtos.TranslatorExtendedDto;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface TranslatorService {
    Page<TranslatorExtendedDto> findAllExtendedTranslators(int page, int size);
    Page<TranslatorDto> findAllTranslators(int page, int size);
    Optional<TranslatorDto> findTranslatorById(Long id);
    List<TranslatorDto> findTranslatorsByName(String firstName);
    TranslatorDto createTranslator(TranslatorDto translatorDto);
    TranslatorDto updateTranslator(Long id, TranslatorDto translatorDto);
    TranslatorDto partialUpdateTranslator(Long id, TranslatorDto translatorDto);
    void removeTranslator(Long id);
    boolean isTranslatorNonExist(Long id);
}
