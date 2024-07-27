import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { useState } from 'react';
import { CreateForm } from './create.tsx';
import { UpdateForm } from './update.tsx';
import { ListAuthors } from './list.tsx';
import styles from '../../assets/styles/pages/Author.module.scss';

function Authors() {
    const token = localStorage.getItem('token');
    const [visible, setVisible] = useState<boolean>(false);
    const [visibleCreate, setVisibleCreate] = useState<boolean>(false);
    const [authorId, setAuthorId] = useState<number>();
    const { isPending, error, data } = useQuery({
        queryKey: ['authors'],
        queryFn: () =>
            fetch('http://localhost:8080/api/v1/authors/all', {
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
        setAuthorId(id);
    };

    const onCreate = () => {
        setVisibleCreate(true);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__flex}>
                <h1 className={styles.wrapper__header}>Magazyn autorów</h1>
                <Button
                    onClick={() => {
                        onCreate();
                    }}
                    type="primary"
                    children={'Dodaj autora'}
                />
            </div>
            <ListAuthors data={data.content} onUpdate={onUpdate} />
            <CreateForm
                visibleCreate={visibleCreate}
                setVisibleCreate={setVisibleCreate}
            />
            <UpdateForm
                authorId={authorId}
                visible={visible}
                setVisible={setVisible}
            />
        </div>
    );
}

export default Authors;
