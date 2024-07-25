import { MenuList } from '../MenuList';
import styles from '../../assets/styles/components/Footer.module.scss';

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
        name: 'audiobooki',
        uri: '/audiobooks',
    },
    {
        name: 'księgarnie',
        uri: '/bookstores',
    },
    {
        name: 'blog',
        uri: '/blog',
    },
];

const profileLinks = [
    {
        name: 'ulubione',
        uri: '/favorite',
    },
    {
        name: 'konto',
        uri: '/account',
    },
    {
        name: 'koszyk',
        uri: '/basket',
    },
];

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.footer__copyright}>
                    &copy; Worldwide Library Community
                </p>
                <div className={styles.footer__menu}>
                    <nav className={styles.footer__navigation}>
                        <MenuList
                            key="wlc__footer__menu__list"
                            arrayList={menuLinks}
                            classNameItem={styles.footer__item}
                            classNameLink={styles.footer__link}
                            classNameList={styles.footer__list}
                        />
                    </nav>
                    <nav className={styles.footer__navigation}>
                        <MenuList
                            key="wlc__footer__profile__list"
                            arrayList={profileLinks}
                            classNameItem={styles.footer__item}
                            classNameLink={styles.footer__link}
                            classNameList={styles.footer__list}
                        />
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default Footer;
