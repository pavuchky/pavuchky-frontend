import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { DonationModal } from 'components/DonationModal/DonationModal';
import sprite from '../../assets/images/sprite.svg';
import {
  BankLink,
  CardInput,
  CardLabel,
  ContactsLink,
  CopyButton,
  CopyIcon,
  DonationDescr,
  DonationDescrText,
  DonationQRWrapper,
  DonationSection,
  DonationText,
  DonationTitle,
  DonationWrapper,
  QRBtn,
  QRCodeIcon,
  QRIcon,
  QRText,
} from './Donation.styled';

const cardNumber = '5375 4112 0306 8395';

export const Donation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(cardNumber);
      toast.success('Card number copied successfully.');
    } catch (error) {
      toast.error('Unable to copy the card number. Please try again later.');
    }
  };

  const handleModalBtnClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <DonationSection id="donation">
      <DonationWrapper>
        <DonationTitle>{t('donation.victory')}</DonationTitle>

        <CardLabel>
          <CardInput type="text" value={cardNumber} readOnly />
          <CopyButton type="button" onClick={() => handleCopyClick()}>
            <CopyIcon>
              <use href={sprite + '#copy'}></use>
            </CopyIcon>
          </CopyButton>
        </CardLabel>

        {isMobile && (
          <QRBtn type="button" onClick={handleModalBtnClick}>
            <QRText>QR-code</QRText>
            <QRCodeIcon>
              <use href={sprite + '#qrcode'}></use>
            </QRCodeIcon>
          </QRBtn>
        )}

        <DonationDescr>
          {t('donation.transfer')}
          <BankLink
            href="https://send.monobank.ua/jar/9f3sWL2CAq"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('donation.monobank')}
          </BankLink>
        </DonationDescr>

        {(isMobile || isDesktop) && (
          <DonationDescrText>
            {t('donation.initiativeDetails')}
            <ContactsLink to="#contacts">
              {t('donation.initiativeAdministrator')}
            </ContactsLink>
          </DonationDescrText>
        )}
      </DonationWrapper>

      {!isMobile && (
        <DonationQRWrapper>
          {isDesktop && <DonationText>{t('donation.protect')}</DonationText>}
          <QRIcon>
            <use href={sprite + '#qr'}></use>
          </QRIcon>
          {isTablet && (
            <DonationDescrText>
              {t('donation.initiativeDetails')}
              <ContactsLink to="#contacts">
                {t('donation.initiativeAdministrator')}
              </ContactsLink>
            </DonationDescrText>
          )}
        </DonationQRWrapper>
      )}

      {isModalOpen && <DonationModal setIsModalOpen={setIsModalOpen} />}
    </DonationSection>
  );
};
