import { Author } from './Author';
import { Book } from './Book';
import { Translator } from './Translator';

export interface ListBookProps {
    data: Array<Book>;
    onUpdate: (id: number) => void;
    handleAddAuthorToBook: (id: number) => void;
    handleAddTranslatorToBook: (id: number) => void;
}

export interface ListAuthorProps {
    data: Array<Author>;
    onUpdate: (id: number) => void;
}

export interface ListTranslatorProps {
    data: Array<Translator>;
    onUpdate: (id: number) => void;
}
