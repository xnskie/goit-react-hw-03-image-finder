import styles from './button-load.module.css'
import PropTypes from 'prop-types'

const ButtonLoad = ({ loadMore }) => {


    return (
        <button onClick={loadMore} className={styles.Button} type='button'>Load more</button>
    )

}

export default ButtonLoad;

ButtonLoad.propTypes = {
    loadMore: PropTypes.func.isRequired
}