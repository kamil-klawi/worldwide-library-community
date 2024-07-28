import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../../assets/styles/components/Book.module.scss';

const Book = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { isPending, error, data } = useQuery({
        queryKey: ['books'],
        queryFn: () =>
            fetch(`http://localhost:8080/api/v1/books/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.json()),
    });

    if (isPending) return 'Loading';

    if (error) return error.message;

    const handlePrev = () => {
        navigate('/books');
        navigate(0);
    };

    return (
        <div className={styles.wrapper}>
            <button
                type="button"
                onClick={handlePrev}
                className={styles.wrapper__button}
            >
                Powrót do ksiązek
            </button>
            <h1 className={styles.wrapper__header}>Informacje szczegółowe:</h1>
            <div className={styles.wrapper__details}>
                <div>
                    <div className={styles.wrapper__text}>Tytuł:</div>
                    <div className={styles.wrapper__text}>Autor:</div>
                    <div className={styles.wrapper__text}>Tłumacz:</div>
                    <div className={styles.wrapper__text}>Wydawnictwo:</div>
                    <div className={styles.wrapper__text}>Język wydania:</div>
                    <div className={styles.wrapper__text}>Język oryginału:</div>
                    <div className={styles.wrapper__text}>Data premiery:</div>
                    <div className={styles.wrapper__text}>Forma:</div>
                    <div className={styles.wrapper__text}>Okładka:</div>
                    <div className={styles.wrapper__text}>Liczba stron:</div>
                    <div className={styles.wrapper__text}>Wysokość [mm]:</div>
                    <div className={styles.wrapper__text}>Głębokość [mm]:</div>
                    <div className={styles.wrapper__text}>Szerokość [mm]:</div>
                </div>
                <div>
                    <div className={styles.wrapper__text}>{data.title}</div>
                    <div className={styles.wrapper__text}>
                        {data.author.firstName}&nbsp;{data.author.secondName}
                        &nbsp;{data.author.lastName}
                    </div>
                    <div className={styles.wrapper__text}>
                        {data.translator.firstName}&nbsp;
                        {data.translator.secondName}
                        &nbsp;{data.translator.lastName}
                    </div>
                    <div className={styles.wrapper__text}>
                        {data.publishingHouse}
                    </div>
                    <div className={styles.wrapper__text}>
                        {data.languageReleased}
                    </div>
                    <div className={styles.wrapper__text}>
                        {data.languageOriginal}
                    </div>
                    <div className={styles.wrapper__text}>
                        {data.publicationDate}
                    </div>
                    <div className={styles.wrapper__text}>{data.type}</div>
                    <div className={styles.wrapper__text}>{data.cover}</div>
                    <div className={styles.wrapper__text}>
                        {data.numberOfPages}
                    </div>
                    <div className={styles.wrapper__text}>{data.height}</div>
                    <div className={styles.wrapper__text}>{data.depth}</div>
                    <div className={styles.wrapper__text}>{data.width}</div>
                </div>
            </div>
        </div>
    );
};

export default Book;
