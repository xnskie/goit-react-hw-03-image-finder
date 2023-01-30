// import { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './search-list.module.css'
import SearchListItem from '../SearchListItem/SearchListItem';

const SearchList = ({ items, showPicture }) => {
    const { gallery } = styles;
    const elements = items.map(({ id, title, webformatURL, largeImageURL }) =>
        <SearchListItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            title={title}
            showPicture={showPicture}
        />)
    return (
        <ul className={gallery}>
            {elements}
        </ul>
    )
}

export default SearchList;

SearchList.defaultProps = {
    items: []
}
SearchList.propTypes = {
    showPicture: PropTypes.func.isRequired,
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};