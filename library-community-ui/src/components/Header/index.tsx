import { Link, useNavigate } from 'react-router-dom';
import { MenuList } from '../MenuList';
import styles from '../../assets/styles/components/Header.module.scss';

const menuLinks = [
    {
        name: 'strona główna',
        uri: '/',
    },
    {
        name: 'ksiązki',
        uri: '/books',
    },
    {
        name: 'blog',
        uri: '/blog',
    },
];

const loginLinks = [
    {
        name: 'logowanie',
        uri: '/login',
    },
    {
        name: 'rejestracja',
        uri: '/register',
    },
];

const profileLinks = [
    {
        name: 'ulubione',
        uri: '/favorite',
    },
    {
        name: 'konto',
        uri: '/admin',
    },
    {
        name: 'koszyk',
        uri: '/basket',
    },
];

function Header() {
    const token = localStorage.getItem('token' || undefined);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        navigate(0);
    };

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.header__navigation}>
                    <MenuList
                        key="wlc__header__menu__list"
                        arrayList={menuLinks}
                        classNameItem={styles.header__item}
                        classNameLink={styles.header__link}
                        classNameList={styles.header__list}
                    />
                </nav>
                <Link className={styles.header__logo} to="/">
                    Magnifecto
                </Link>
                <nav className={styles.header__navigation}>
                    <MenuList
                        key="wlc__header__profile__list"
                        arrayList={
                            token != undefined ? profileLinks : loginLinks
                        }
                        classNameItem={styles.header__item}
                        classNameLink={styles.header__link}
                        classNameList={styles.header__list}
                    />
                    {token && (
                        <button
                            className={styles.header__logout}
                            onClick={handleLogout}
                            type="button"
                        >
                            Wyloguj się
                        </button>
                    )}
                </nav>
            </header>
        </>
    );
}

export default Header;
