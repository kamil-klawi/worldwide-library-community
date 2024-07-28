import BookArticleImage from '../../assets/images/book_article_image.png';
import AuthorArticleImage from '../../assets/images/author_article_image.png';
import styles from '../../assets/styles/pages/Admin.module.scss';

function Admin() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img
                    className={styles.card__image}
                    src={BookArticleImage}
                    alt="stos ksiązek w kosmicznym pałacu"
                />
                <div className={styles.card__content}>
                    <h2 className={styles.card__header}>
                        Zarządzanie Książkami za Pomocą API w Systemie CRM
                    </h2>
                    <p className={styles.card__description}>
                        W dzisiejszym świecie cyfryzacji, zarządzanie danymi i
                        zasobami stało się kluczowym elementem funkcjonowania
                        wielu firm i instytucji. Jednym z popularnych narzędzi
                        służących do zarządzania relacjami z klientami jest
                        system CRM (Customer Relationship Management).
                    </p>
                    <p className={styles.card__description}>
                        Systemy te często oferują integracje z różnymi API
                        (Application Programming Interface), co umożliwia
                        efektywne zarządzanie danymi, takimi jak książki w
                        bibliotekach, księgarniach czy magazynach.
                    </p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.card__content}>
                    <h2 className={styles.card__header}>
                        Zarządzanie Autorami za Pomocą API w Systemie CRM
                    </h2>
                    <p className={styles.card__description}>
                        W dzisiejszych czasach systemy CRM (Customer
                        Relationship Management) stają się nieocenionym
                        narzędziem w zarządzaniu danymi, w tym danymi autorów
                        książek. Dzięki integracji CRM z API (Application
                        Programming Interface), proces przeglądania, dodawania,
                        edytowania i usuwania informacji o autorach staje się
                        niezwykle efektywny i zautomatyzowany.
                    </p>
                </div>
                <img
                    className={styles.card__image}
                    src={AuthorArticleImage}
                    alt="Pisarz pisze arcydzieło na łonie natury"
                />
            </div>
        </div>
    );
}

export default Admin;
