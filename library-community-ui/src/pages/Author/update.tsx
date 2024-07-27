import { Button, Form, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../../hooks/UseAxios';
import { ModalAuthorProps } from '../../types/Modal';
import { FC } from 'react';

export const UpdateForm: FC<ModalAuthorProps> = ({
    authorId,
    visible,
    setVisible,
}) => {
    const axiosInstance = useAxios();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    axiosInstance
        .get(`http://localhost:8080/api/v1/authors/${authorId}`)
        .then((value) => {
            form.setFieldsValue({
                firstName: value.data.firstName,
                secondName: value.data.secondName,
                lastName: value.data.lastName,
            });
        });

    return (
        <Modal
            footer
            open={visible}
            onCancel={() => setVisible(false)}
            title="Aktualizuj autora"
        >
            <Form
                form={form}
                onFinish={(values) => {
                    axiosInstance
                        .put(
                            `http://localhost:8080/api/v1/authors/${authorId}`,
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
                    name="firstName"
                    label="Imię"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Imię" />
                </Form.Item>
                <Form.Item
                    name="secondName"
                    label="Drugie imię"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Drugie imię" />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Nazwisko"
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Nazwisko" />
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
