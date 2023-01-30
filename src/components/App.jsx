import { Component } from 'react';
import PhotoSearch from './PhotoSearch/PhotoSearch'
import styles from './App.module.css'


class App extends Component {

    render() {
        return(
            <div className={styles.App}>
            <PhotoSearch />
            </div>
        )
    }
}

export default App;