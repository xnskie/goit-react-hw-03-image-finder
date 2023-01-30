import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'


class Searchbar extends Component {
    state = {
        search: '',
    }
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset();
    }

    reset(){
        this.setState({
            search: '',
        })
    }

    render() {
        const { Searchbar, SearchForm, button, label, input } = styles;
        const {search} = this.state;
        const {handleChange, handleSubmit} = this;
        return (
            <header className={Searchbar}>
                <form className={SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={button}>
                        <span className={label}>Search</span>
                    </button>
                    <input
                        className={input}
                        value={search}
                        onChange={handleChange}
                        name='search'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        required
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}