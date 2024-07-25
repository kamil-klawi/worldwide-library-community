import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/images/404.svg';
import styles from '../../assets/styles/pages/NotFound.module.scss';

function NotFound() {
    return (
        <div className={styles.error}>
            <img
                className={styles.error__image}
                src={NotFoundImage}
                alt="Nie znaleziono strony"
            />
            <div className={styles.error__content}>
                <h2 className={styles.error__header}>
                    Wystąpił błąd! Nie znaleziono strony!
                </h2>
                <p className={styles.error__description}>
                    Wygląda na to, że strona, której szukasz jest chwilowo
                    niedostępna.
                </p>
                <div className={styles.error__groupOfLinks}>
                    <Link
                        to="/"
                        className={`${styles.error__link} ${styles.error__link_primary}`}
                    >
                        Strona główna
                    </Link>
                    <Link to="/our-mission" className={styles.error__link}>
                        Nasza misja
                    </Link>
                    <Link to="/contact" className={styles.error__link}>
                        Kontakt
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
