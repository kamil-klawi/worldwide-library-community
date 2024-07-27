import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { useState } from 'react';
import { CreateForm } from './create.tsx';
import { AddAuthorToBook, AddTranslatorToBook, UpdateForm } from './update.tsx';
import { ListBooks } from './list.tsx';
import styles from '../../assets/styles/pages/Book.module.scss';

function Books() {
    const token = localStorage.getItem('token');
    const [visible, setVisible] = useState<boolean>(false);
    const [visibleCreate, setVisibleCreate] = useState<boolean>(false);
    const [visibleAddAuthorToBook, setVisibleAddAuthorToBook] =
        useState<boolean>(false);
    const [visibleAddTranslatorToBook, setVisibleAddTranslatorToBook] =
        useState<boolean>(false);
    const [bookId, setBookId] = useState<number>();
    const { isPending, error, data } = useQuery({
        queryKey: ['books'],
        queryFn: () =>
            fetch('http://localhost:8080/api/v1/books/all', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.json()),
    });

    if (isPending) return 'Loading';

    if (error) return error.message;

    const onUpdate = (id?: number) => {
        setVisible(true);
        setBookId(id);
    };

    const onCreate = () => {
        setVisibleCreate(true);
    };

    const handleAddAuthorToBook = (id?: number) => {
        setVisibleAddAuthorToBook(true);
        setBookId(id);
    };

    const handleAddTranslatorToBook = (id?: number) => {
        setVisibleAddTranslatorToBook(true);
        setBookId(id);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__flex}>
                <h1 className={styles.wrapper__header}>Magazyn ksiązek</h1>
                <Button
                    onClick={() => {
                        onCreate();
                    }}
                    type="primary"
                    children={'Dodaj ksiązke'}
                />
            </div>
            <ListBooks
                data={data.content}
                onUpdate={onUpdate}
                handleAddAuthorToBook={handleAddAuthorToBook}
                handleAddTranslatorToBook={handleAddTranslatorToBook}
            />
            <CreateForm
                visibleCreate={visibleCreate}
                setVisibleCreate={setVisibleCreate}
            />
            <UpdateForm
                bookId={bookId}
                visible={visible}
                setVisible={setVisible}
            />
            <AddAuthorToBook
                bookId={bookId}
                visibleAddAuthorToBook={visibleAddAuthorToBook}
                setVisibleAddAuthorToBook={setVisibleAddAuthorToBook}
            />
            <AddTranslatorToBook
                bookId={bookId}
                visibleAddTranslatorToBook={visibleAddTranslatorToBook}
                setVisibleAddTranslatorToBook={setVisibleAddTranslatorToBook}
            />
        </div>
    );
}

export default Books;
