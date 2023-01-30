import { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom';
import styles from './modal.module.css'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeModal);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModal);
    }

    closeModal = ({ target, currentTarget, code }) => {
        if (target === currentTarget || code === 'Escape') {
            this.props.closeModal();
        }
    };

    render() {
        const { closeModal } = this;
        const {
            currentImage: { title, src },
        } = this.props;
        return (
            createPortal(
                <div className={styles.Overlay} onClick={closeModal}>
                    <div className={styles.Modal}>
                        <img src={src} alt={title} />
                    </div>
                </div>,
                modalRoot
            )
        )
    }
}

export default Modal;

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};