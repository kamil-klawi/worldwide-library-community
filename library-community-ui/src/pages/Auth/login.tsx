import { Field, Form, Formik } from 'formik';
import { LoginProps } from '../../types/Auth';
import styles from '../../assets/styles/pages/Login.module.scss';
import { useAxios } from '../../hooks/UseAxios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const axiosInstance = useAxios();
    const navigate = useNavigate();

    return (
        <div className={styles.form}>
            <h1 className={styles.form__header}>Login</h1>
            <p className={styles.form__breadcumb}>Strona główna / Logowanie</p>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async (values: LoginProps) => {
                    try {
                        await axiosInstance
                            .post(
                                '/auth/authenticate',
                                JSON.stringify(values, null, 2)
                            )
                            .then((res) => {
                                localStorage.setItem('token', res.data.token);
                            });
                        await navigate('/');
                        await navigate(0);
                    } catch (err) {
                        console.error(err);
                    }
                }}
            >
                <Form>
                    <label htmlFor="email" className={styles.form__label}>
                        Adres e-mail
                    </label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="Adres e-mail"
                        type="email"
                        className={styles.form__input}
                    />
                    <label htmlFor="password" className={styles.form__label}>
                        Hasło
                    </label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="Hasło"
                        type="password"
                        className={styles.form__input}
                    />
                    <div className={styles.form__divide}></div>
                    <button
                        type="submit"
                        className={`${styles.form__button} ${styles.form__button_primary}`}
                    >
                        Zaloguj się
                    </button>
                    <button type="button" className={styles.form__button}>
                        Powrót na strone główną
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;
