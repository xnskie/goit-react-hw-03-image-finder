import { ThreeDots } from "react-loader-spinner";
import styles from './loader.module.css'

const Loader = () => {
    return (
        <div className={styles.div}>
            <ThreeDots
                strokeColor='lightgray'
            />
        </div>
    )
}

export default Loader;