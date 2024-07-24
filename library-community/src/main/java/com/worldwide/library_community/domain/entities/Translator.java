package com.worldwide.library_community.domain.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "_translator")
public class Translator {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "firstName", nullable = false)
    private String firstName;
    @Column(name = "secondName")
    private String secondName;
    @Column(name = "lastName", nullable = false)
    private String lastName;
    @OneToMany(mappedBy = "translator", fetch = FetchType.LAZY)
    private List<Book> books;
}
