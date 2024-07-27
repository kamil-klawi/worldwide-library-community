import { Button, Space, Table } from 'antd';
import { FC } from 'react';
import { useAxios } from '../../hooks/UseAxios/index.tsx';
import { useNavigate } from 'react-router-dom';
import { Book } from '../../types/Book.ts';
import { ListBookProps } from '../../types/Form.ts';

export const ListBooks: FC<ListBookProps> = ({
    data,
    onUpdate,
    handleAddAuthorToBook,
    handleAddTranslatorToBook,
}) => {
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    return (
        <Table
            key="books"
            style={{ textWrap: 'nowrap', width: '100%' }}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            bordered
            scroll={{ x: '100%' }}
        >
            <Table.Column title="Lp" dataIndex="id" key="id" />
            <Table.Column title="Tytuł" dataIndex="title" key="title" />
            <Table.Column
                title="Wydawnictwo"
                dataIndex="publishingHouse"
                key="publishingHouse"
            />
            <Table.Column
                title="Język oryginału"
                dataIndex="languageOriginal"
                key="languageOriginal"
            />
            <Table.Column
                title="Język wydania"
                dataIndex="languageReleased"
                key="languageReleased"
            />
            <Table.Column
                title="Liczba stron"
                dataIndex="numberOfPages"
                key="numberOfPages"
            />
            <Table.Column
                title="Data wydania"
                dataIndex="publicationDate"
                key="publicationDate"
            />
            <Table.Column title="Rodzaj" dataIndex="type" key="type" />
            <Table.Column title="Okładka" dataIndex="cover" key="cover" />
            <Table.Column
                title="Wysokość"
                dataIndex="height"
                key="height"
                render={(_, record) => <span>{record.height} mm</span>}
            />
            <Table.Column
                title="Szerokość"
                dataIndex="width"
                key="width"
                render={(_, record) => <span>{record.width} mm</span>}
            />
            <Table.Column
                title="Głębokość"
                dataIndex="depth"
                key="depth"
                render={(_, record) => <span>{record.depth} mm</span>}
            />
            <Table.Column<Book>
                title="Akcje"
                dataIndex="actions"
                key="actions"
                render={(_, values) => (
                    <>
                        <Space>
                            <Button
                                onClick={() => {
                                    axiosInstance
                                        .delete(
                                            `http://localhost:8080/api/v1/books/${values.id}`
                                        )
                                        .then(() => {
                                            navigate(0);
                                        });
                                }}
                                danger
                                children={'Usuń'}
                            />
                            <Button
                                onClick={() => {
                                    onUpdate(values.id);
                                }}
                                children={'Aktualizuj'}
                            />
                            <Button
                                onClick={() => {
                                    handleAddAuthorToBook(values.id);
                                }}
                                children={'Dodaj autora'}
                            />
                            <Button
                                onClick={() => {
                                    handleAddTranslatorToBook(values.id);
                                }}
                                children={'Dodaj tłumacza'}
                            />
                        </Space>
                    </>
                )}
            />
        </Table>
    );
};
