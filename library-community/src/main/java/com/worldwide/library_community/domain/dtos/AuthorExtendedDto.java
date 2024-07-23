package com.worldwide.library_community.domain.dtos;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthorExtendedDto extends AuthorDto {
    private List<BookDto> books;
}
