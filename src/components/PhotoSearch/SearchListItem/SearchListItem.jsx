import styles from './search-list-item.scss';

const SearchListItem = ({key, src, title}) => {
    const { item, image } = styles;
    return (
        <li className={item} key={key}>
            <img className={image} src={src} alt={title} />
        </li>
    )

}

export default SearchListItem;

// SearchListItem.defaultProps {
//     src='';
//     title: '';
//     key: '';
// }