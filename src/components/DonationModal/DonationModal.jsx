import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import sprite from '../../assets/images/sprite.svg';
import { DonationQRCode } from './DonationModal.styled';

export const DonationModal = ({ setIsModalOpen }) => {
  const handleModalClose = () => {
    setIsModalOpen(prev => !prev);
    document.body.style.overflow = 'auto';
  };

  return (
    <Modal onClose={handleModalClose}>
      <DonationQRCode>
        <use href={sprite + '#qr'}></use>
      </DonationQRCode>
    </Modal>
  );
};

DonationModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
