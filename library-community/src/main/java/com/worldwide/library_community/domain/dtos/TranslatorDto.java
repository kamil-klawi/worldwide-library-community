package com.worldwide.library_community.domain.dtos;

import lombok.*;

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
}
