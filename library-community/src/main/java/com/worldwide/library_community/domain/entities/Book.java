package com.worldwide.library_community.domain.entities;

import com.worldwide.library_community.domain.enums.Language;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "_book")
public class Book {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "publishingHouse", nullable = false)
    private String publishingHouse;
    @Enumerated(EnumType.STRING)
    @Column(name = "languageOriginal", nullable = false)
    private Language languageOriginal;
    @Enumerated(EnumType.STRING)
    @Column(name = "languageReleased", nullable = false)
    private Language languageReleased;
    @Column(name = "numberOfPages", nullable = false)
    private Integer numberOfPages;
    @Column(name = "publicationDate", nullable = false)
    private LocalDate publicationDate;
    @Column(name = "type", nullable = false)
    private String type;
    @Column(name = "cover", nullable = false)
    private String cover;
    @Column(name = "height", nullable = false)
    private Double height;
    @Column(name = "width", nullable = false)
    private Double width;
    @Column(name = "depth", nullable = false)
    private Double depth;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id")
    private Author author;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "translator_id")
    private Translator translator;
}
