import { useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { useState } from 'react';
import { CreateForm } from './create.tsx';
import { UpdateForm } from './update.tsx';
import { ListTranslators } from './list.tsx';
import styles from '../../assets/styles/pages/Translator.module.scss';

function Translators() {
    const token = localStorage.getItem('token');
    const [visible, setVisible] = useState<boolean>(false);
    const [visibleCreate, setVisibleCreate] = useState<boolean>(false);
    const [translatorId, setTranslatorId] = useState<number>();
    const { isPending, error, data } = useQuery({
        queryKey: ['translators'],
        queryFn: () =>
            fetch('http://localhost:8080/api/v1/translators/all', {
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
        setTranslatorId(id);
    };

    const onCreate = () => {
        setVisibleCreate(true);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__flex}>
                <h1 className={styles.wrapper__header}>Magazyn tłumaczy</h1>
                <Button
                    onClick={() => {
                        onCreate();
                    }}
                    type="primary"
                    children={'Dodaj tłumacza'}
                />
            </div>
            <ListTranslators data={data.content} onUpdate={onUpdate} />
            <CreateForm
                visibleCreate={visibleCreate}
                setVisibleCreate={setVisibleCreate}
            />
            <UpdateForm
                translatorId={translatorId}
                visible={visible}
                setVisible={setVisible}
            />
        </div>
    );
}

export default Translators;
