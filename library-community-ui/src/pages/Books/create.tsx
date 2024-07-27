import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../hooks/UseAxios';
import { ModalCreateProps } from '../../types/Modal';
import { FC } from 'react';

export const CreateForm: FC<ModalCreateProps> = ({
    visibleCreate,
    setVisibleCreate,
}) => {
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    return (
        <Modal
            footer
            open={visibleCreate}
            onCancel={() => setVisibleCreate(false)}
            title="Dodaj ksiązke"
        >
            <Form
                onFinish={(values) => {
                    axiosInstance
                        .post(
                            'http://localhost:8080/api/v1/books/create',
                            values
                        )
                        .then(() => {
                            setVisibleCreate(false);
                            navigate(0);
                        });
                }}
                layout="vertical"
            >
                <Form.Item
                    name="title"
                    label="Tytuł"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Tytuł" />
                </Form.Item>
                <Form.Item
                    name="publishingHouse"
                    label="Wydawnictwo"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Wydawnictwo" />
                </Form.Item>
                <Form.Item
                    name="languageOriginal"
                    label="Język oryginału"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Język oryginału" />
                </Form.Item>
                <Form.Item
                    name="languageReleased"
                    label="Język wydania"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Język wydania" />
                </Form.Item>
                <Form.Item
                    name="numberOfPages"
                    label="Liczba stron"
                    rules={[{ required: true }]}
                >
                    <InputNumber
                        placeholder="Liczba stron"
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    name="publicationDate"
                    label="Data wydania"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Data wydania" />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Rodzaj"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Rodzaj" />
                </Form.Item>
                <Form.Item
                    name="cover"
                    label="Okładka"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Okładka" />
                </Form.Item>
                <Form.Item
                    name="height"
                    label="Wysokość"
                    rules={[{ required: true }]}
                >
                    <InputNumber
                        placeholder="Wysokość"
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    name="width"
                    label="Szerokość"
                    rules={[{ required: true }]}
                >
                    <InputNumber
                        placeholder="Szerokość"
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    name="depth"
                    label="Głębokość"
                    rules={[{ required: true }]}
                >
                    <InputNumber
                        placeholder="Głębokość"
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="middle">
                        Dodaj
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
