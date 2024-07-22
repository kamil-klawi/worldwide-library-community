package com.worldwide.library_community.domain.dtos;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TranslatorDto {
    private Long id;
    private String firstName;
    private String secondName;
    private String lastName;
    private List<BookDto> books;
}
