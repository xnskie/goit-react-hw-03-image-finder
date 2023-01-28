import { Component } from 'react';
import styles from './Searchbar.module.css'

class Searchbar extends Component {
    render() {
        const { Searchbar, SearchForm, button, label, input } = styles;
        return (
            <header className={Searchbar}>
                <form className={SearchForm}>
                    <button type="submit" className={button}>
                        <span className={label}>Search</span>
                    </button>
                    <input
                        className={input} 
                        name='search'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;