import { Button, Form, Input, Modal } from 'antd';
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
            title="Dodaj autora"
        >
            <Form
                onFinish={(values) => {
                    axiosInstance
                        .post(
                            'http://localhost:8080/api/v1/authors/create',
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
