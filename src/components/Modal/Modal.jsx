import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import sprite from '../../assets/images/sprite.svg';
import {
  CloseButton,
  CloseIcon,
  ModalBackdrop,
  ModalWindow,
} from './Modal.styled';

const modalContainer = document.getElementById('modal-root');

export const Modal = ({ children, onClose, variant }) => {
  useEffect(() => {
    const handleEscClick = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscClick);

    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
  }, [onClose]);

  const handleCloseBtnClick = () => {
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalWindow variant={variant}>
        <CloseButton
          type="button"
          onClick={handleCloseBtnClick}
          variant={variant}
          aria-label="Close button"
        >
          <CloseIcon>
            <use href={sprite + '#close'}></use>
          </CloseIcon>
        </CloseButton>
        {children}
      </ModalWindow>
    </ModalBackdrop>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
