import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
    bookId?: number;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export interface ModalAuthorProps {
    authorId?: number;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export interface ModalAuthorProps {
    translatorId?: number;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export interface ModalAddAuthorToBookProps {
    bookId?: number;
    visibleAddAuthorToBook: boolean;
    setVisibleAddAuthorToBook: Dispatch<SetStateAction<boolean>>;
}

export interface ModalAddTranslatorToBookProps {
    bookId?: number;
    visibleAddTranslatorToBook: boolean;
    setVisibleAddTranslatorToBook: Dispatch<SetStateAction<boolean>>;
}

export interface ModalCreateProps {
    visibleCreate: boolean;
    setVisibleCreate: Dispatch<SetStateAction<boolean>>;
}
