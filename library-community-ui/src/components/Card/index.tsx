import { FC } from 'react';
import { Book } from '../../types/Book';
import { CardProps } from '../../types/Card';
import styles from '../../assets/styles/components/Card.module.scss';
import { useNavigate } from 'react-router-dom';

const Card: FC<CardProps<Book>> = ({ arrayList }) => {
    const navigate = useNavigate();

    const handleBook = (id?: number) => {
        navigate(`/books/${id}`);
        navigate(0);
    };

    return (
        <>
            {arrayList.map((item, index) => (
                <div className={styles.card} key={index}>
                    <h2 className={styles.card__title}>{item.title}</h2>
                    <p className={styles.card__author}>
                        {item.author.firstName}&nbsp;
                        {item.author.secondName}&nbsp;
                        {item.author.lastName}
                    </p>
                    <button
                        type="button"
                        onClick={() => handleBook(item?.id)}
                        className={styles.card__button}
                    >
                        Dowiedz się więcej
                    </button>
                </div>
            ))}
        </>
    );
};

export default Card;
