import { createPortal } from 'react-dom';
import sprite from '../../assets/images/sprite.svg';
import {
  CloseIcon,
  DonationBackdrop,
  DonationModalWindow,
  DonationQRCode,
} from './DonationModal.styled';
import { useEffect } from 'react';

const modalContainer = document.getElementById('modal-root');

export const DonationModal = ({ setIsModalOpen }) => {
  useEffect(() => {
    const handleEscClick = event => {
      if (event.code === 'Escape') {
        setIsModalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleEscClick);

    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
  }, [setIsModalOpen]);

  const handleCloseBtnClick = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    setIsModalOpen(prev => !prev);
  };

  return createPortal(
    <DonationBackdrop onClick={handleBackdropClick}>
      <DonationModalWindow>
        <button type="button" onClick={handleCloseBtnClick}>
          <CloseIcon>
            <use href={sprite + '#close'}></use>
          </CloseIcon>
        </button>
        <DonationQRCode>
          <use href={sprite + '#qr'}></use>
        </DonationQRCode>
      </DonationModalWindow>
    </DonationBackdrop>,
    modalContainer
  );
};
