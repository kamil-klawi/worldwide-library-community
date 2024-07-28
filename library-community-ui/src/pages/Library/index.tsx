import { useQuery } from '@tanstack/react-query';
import Card from '../../components/Card';
import styles from '../../assets/styles/pages/Library.module.scss';

function Library() {
    const token = localStorage.getItem('token');
    const { isPending, error, data } = useQuery({
        queryKey: ['books'],
        queryFn: () =>
            fetch('http://localhost:8080/api/v1/books/all', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.json()),
    });

    if (isPending) return 'Loading';

    if (error) return error.message;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__filter}>
                <div>Filter</div>
            </div>
            <div className={styles.wrapper__cards}>
                <Card arrayList={data.content} />
            </div>
        </div>
    );
}

export default Library;
