import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuListProps } from '../../types/MenuList';

export const MenuList: FC<MenuListProps> = ({
    arrayList,
    classNameItem,
    classNameLink,
    classNameList,
}) => {
    return (
        <>
            <ul className={classNameList}>
                {arrayList.map((item, index: number) => (
                    <li key={index} className={classNameItem}>
                        <Link className={classNameLink} to={item.uri}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
