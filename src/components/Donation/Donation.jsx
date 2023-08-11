import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/images/sprite.svg';
import {
  BankLink,
  CardInput,
  CardLabel,
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
import { useState } from 'react';
import { DonationModal } from 'components/DonationModal/DonationModal';
import { toast } from 'react-toastify';

const cardNumber = '5375 4112 0306 8395';

export const Donation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <DonationTitle>Донать на перемогу</DonationTitle>

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
          Ви можете переказати кошти на
          <BankLink
            href="https://send.monobank.ua/jar/9f3sWL2CAq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Монобанку
          </BankLink>
        </DonationDescr>

        {(isMobile || isDesktop) && (
          <DonationDescrText>
            Щоб дізнатися інші реквізити &#8220;Павучків&#8221;, зверніться до
            адміністратора ініціативи
          </DonationDescrText>
        )}
      </DonationWrapper>

      {!isMobile && (
        <DonationQRWrapper>
          {isDesktop && (
            <DonationText>
              Кожен донат допомагає захистити наших воїнів та наближає Україну
              до перемоги!
            </DonationText>
          )}
          <QRIcon>
            <use href={sprite + '#qr'}></use>
          </QRIcon>
          {isTablet && (
            <DonationDescrText>
              Щоб дізнатися інші реквізити &#8220;Павучків&#8221;, зверніться до
              адміністратора ініціативи
            </DonationDescrText>
          )}
        </DonationQRWrapper>
      )}

      {isModalOpen && <DonationModal setIsModalOpen={setIsModalOpen} />}
    </DonationSection>
  );
};
