import { useEffect } from 'react';
import { createPortal } from 'react-dom';
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
