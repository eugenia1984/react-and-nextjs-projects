import PropTypes from 'prop-types';

import classes from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.function
};

export default Modal;