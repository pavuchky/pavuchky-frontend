import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/images/sprite.svg';
import {
  BankLink,
  CardInput,
  CardLabel,
  CopyButton,
  CopyIcon,
  DonationDescr,
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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(cardNumber);
    } catch (error) {}
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
          <QRBtn type="button">
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
        </DonationQRWrapper>
      )}
    </DonationSection>
  );
};
