package com.worldwide.library_community.controllers;

import com.worldwide.library_community.domain.dtos.TranslatorDto;
import com.worldwide.library_community.domain.dtos.TranslatorExtendedDto;
import com.worldwide.library_community.services.impl.TranslatorServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/translators")
@RequiredArgsConstructor
public class TranslatorController {
    private final TranslatorServiceImpl translatorService;

    @GetMapping("/all/details")
    public ResponseEntity<Page<TranslatorExtendedDto>> findAllExtendedTranslators(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "4") int size
    ) {
        return ResponseEntity.ok(translatorService.findAllExtendedTranslators(page, size));
    }

    @GetMapping("/all")
    public ResponseEntity<Page<TranslatorDto>> findAllTranslators(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "4") int size
    ) {
        return ResponseEntity.ok(translatorService.findAllTranslators(page, size));
    }

    @GetMapping(path = "/{translatorId}")
    public ResponseEntity<Optional<TranslatorDto>> findTranslatorById(@PathVariable Long translatorId) {
        if (translatorService.isTranslatorNonExist(translatorId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(translatorService.findTranslatorById(translatorId));
    }

    @GetMapping
    public ResponseEntity<List<TranslatorDto>> findTranslatorsByName(@RequestParam String firstName) {
        return ResponseEntity.ok(translatorService.findTranslatorsByName(firstName));
    }

    @PostMapping(path = "/create")
    public ResponseEntity<TranslatorDto> createTranslator(@RequestBody TranslatorDto translatorDto) {
        return ResponseEntity.ok(translatorService.createTranslator(translatorDto));
    }

    @PutMapping(path = "/{translatorId}")
    public ResponseEntity<TranslatorDto> updateTranslator(
            @PathVariable Long translatorId,
            @RequestBody TranslatorDto translatorDto
    ) {
        if (translatorService.isTranslatorNonExist(translatorId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(translatorService.updateTranslator(translatorId, translatorDto));
    }

    @PatchMapping(path = "/{translatorId}")
    public ResponseEntity<TranslatorDto> partialUpdateTranslator(
            @PathVariable Long translatorId,
            @RequestBody TranslatorDto translatorDto
    ) {
        if (translatorService.isTranslatorNonExist(translatorId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(translatorService.partialUpdateTranslator(translatorId, translatorDto));
    }

    @DeleteMapping(path = "/{translatorId}")
    public ResponseEntity removeTranslator(@PathVariable Long translatorId) {
        if (translatorService.isTranslatorNonExist(translatorId)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        translatorService.removeTranslator(translatorId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
