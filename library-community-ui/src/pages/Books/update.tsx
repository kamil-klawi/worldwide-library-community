import { FC } from 'react';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { useAxios } from '../../hooks/UseAxios';
import { useNavigate } from 'react-router-dom';
import {
    ModalAddAuthorToBookProps,
    ModalAddTranslatorToBookProps,
    ModalProps,
} from '../../types/Modal';

export const UpdateForm: FC<ModalProps> = ({ bookId, visible, setVisible }) => {
    const axiosInstance = useAxios();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    axiosInstance
        .get(`http://localhost:8080/api/v1/books/${bookId}`)
        .then((value) => {
            form.setFieldsValue({
                title: value.data.title,
                publishingHouse: value.data.publishingHouse,
                languageOriginal: value.data.languageOriginal,
                languageReleased: value.data.languageReleased,
                numberOfPages: value.data.numberOfPages,
                publicationDate: value.data.publicationDate,
                type: value.data.type,
                cover: value.data.cover,
                height: value.data.height,
                width: value.data.width,
                depth: value.data.depth,
            });
        });

    return (
        <Modal
            footer
            open={visible}
            onCancel={() => setVisible(false)}
            title="Aktualizuj ksiązke"
        >
            <Form
                form={form}
                onFinish={(values) => {
                    axiosInstance
                        .put(
                            `http://localhost:8080/api/v1/books/${bookId}`,
                            values
                        )
                        .then(() => {
                            setVisible(false);
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
                        Zapisz
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export const AddAuthorToBook: FC<ModalAddAuthorToBookProps> = ({
    bookId,
    visibleAddAuthorToBook,
    setVisibleAddAuthorToBook,
}) => {
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    return (
        <Modal
            footer
            open={visibleAddAuthorToBook}
            onCancel={() => setVisibleAddAuthorToBook(false)}
            title="Dodaj autora do ksiązki"
        >
            <Form
                onFinish={(values) => {
                    axiosInstance
                        .put(
                            `http://localhost:8080/api/v1/books/${bookId}/author/${values.authorId}`
                        )
                        .then(() => {
                            setVisibleAddAuthorToBook(false);
                            navigate(0);
                        });
                }}
                layout="vertical"
            >
                <Form.Item
                    name="authorId"
                    label="Wybierz autora"
                    rules={[{ required: true }]}
                >
                    <InputNumber
                        placeholder="Wybierz autora"
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="middle">
                        Zapisz
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export const AddTranslatorToBook: FC<ModalAddTranslatorToBookProps> = ({
    bookId,
    visibleAddTranslatorToBook,
    setVisibleAddTranslatorToBook,
}) => {
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    return (
        <Modal
            footer
            open={visibleAddTranslatorToBook}
            onCancel={() => setVisibleAddTranslatorToBook(false)}
            title="Dodaj tłumacza do ksiązki"
        >
            <Form
                onFinish={(values) => {
                    axiosInstance
                        .put(
                            `http://localhost:8080/api/v1/books/${bookId}/translator/${values.translatorId}`
                        )
                        .then(() => {
                            setVisibleAddTranslatorToBook(false);
                            navigate(0);
                        });
                }}
                layout="vertical"
            >
                <Form.Item
                    name="translatorId"
                    label="Wybierz tłumacza"
                    rules={[{ required: true }]}
                >
                    <InputNumber
                        placeholder="Wybierz tłumacza"
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="middle">
                        Zapisz
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
