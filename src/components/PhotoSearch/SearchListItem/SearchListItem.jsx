import styles from './search-list-item.module.css';
import PropTypes from 'prop-types';

const SearchListItem = ({ webformatURL, largeImageURL, title, showPicture }) => {
    const { item, image } = styles;
    return (
        <li className={item}
            onClick={() => showPicture({ alt: title, src: webformatURL })}>
            <img className={image} src={largeImageURL} alt={title} />
        </li>
    )

}

export default SearchListItem;

SearchListItem.propTypes = {
    showPicture: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}


// SearchListItem.defaultProps {
//     src='';
//     title: '';
//     key: '';
// }