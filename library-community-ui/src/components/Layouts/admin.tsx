import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MenuList } from '../MenuList';
import styles from '../../assets/styles/components/Header.module.scss';

const adminPanels = [
    {
        name: 'ksiązki',
        uri: '/admin/books',
    },
    {
        name: 'autorzy',
        uri: '/admin/authors',
    },
    {
        name: 'tłumacze',
        uri: '/admin/translators',
    },
];

function AdminLayout() {
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
                <Link className={styles.header__logo} to="/admin">
                    Admin panel
                </Link>
                <nav className={styles.header__navigation}>
                    <MenuList
                        key="wlc__header__menu__list"
                        arrayList={adminPanels}
                        classNameItem={styles.header__item}
                        classNameLink={styles.header__link}
                        classNameList={styles.header__list}
                    />
                </nav>
                {token && (
                    <button
                        className={styles.header__logout}
                        onClick={handleLogout}
                        type="button"
                    >
                        Wyloguj się
                    </button>
                )}
            </header>
            <main className="my-10">
                <Outlet />
            </main>
        </>
    );
}

export default AdminLayout;
