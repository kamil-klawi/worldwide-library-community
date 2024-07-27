import { Author } from './Author';
import { Translator } from './Translator';

export interface Book {
    id: number;
    title: string;
    publishingHouse: string;
    languageOriginal: string;
    languageRelease: string;
    numberOfPages: number;
    publicationDate: Date;
    type: string;
    cover: string;
    height: number;
    width: number;
    depth: number;
    author: Author;
    translator: Translator;
}
