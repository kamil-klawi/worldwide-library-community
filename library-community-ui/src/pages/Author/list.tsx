import { Button, Space, Table } from 'antd';
import { FC } from 'react';
import { ListAuthorProps } from '../../types/Form.ts';
import { Author } from '../../types/Author.ts';
import { useAxios } from '../../hooks/UseAxios/index.tsx';
import { useNavigate } from 'react-router-dom';

export const ListAuthors: FC<ListAuthorProps> = ({ data, onUpdate }) => {
    const axiosInstance = useAxios();
    const navigate = useNavigate();
    return (
        <Table
            key="authors"
            style={{ textWrap: 'nowrap', width: '100%' }}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            bordered
            scroll={{ x: '100%' }}
        >
            <Table.Column title="Lp" dataIndex="id" key="id" />
            <Table.Column
                title={'Imię'}
                dataIndex="firstName"
                key="firstName"
            />
            <Table.Column
                title={'Drugie imię'}
                dataIndex="secondName"
                key="secondName"
            />
            <Table.Column
                title={'Nazwisko'}
                dataIndex="lastName"
                key="lastName"
            />
            <Table.Column<Author>
                title={'Akcje'}
                dataIndex="actions"
                key="actions"
                render={(_, values) => (
                    <>
                        <Space>
                            <Button
                                onClick={() => {
                                    axiosInstance
                                        .delete(
                                            `http://localhost:8080/api/v1/authors/${values.id}`
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
                        </Space>
                    </>
                )}
            />
        </Table>
    );
};
