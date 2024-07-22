package com.worldwide.library_community.domain.dtos;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookDto {
    private Long id;
    private String title;
    private String publishingHouse;
    private String languageOriginal;
    private String languageReleased;
    private Integer numberOfPages;
    private LocalDate publicationDate;
    private String type;
    private String cover;
    private Double height;
    private Double width;
    private Double depth;
    private AuthorDto author;
    private TranslatorDto translator;
}
