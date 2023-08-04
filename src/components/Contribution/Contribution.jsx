import { useMediaQuery } from 'react-responsive';
import {
  ContributeSection,
  ContributeDescr,
  ContributeTitle,
  DonateStyledLink,
  LinksList,
  LinksListItem,
  OrderStyledLink,
  TextWrapper,
} from './Contribution.styled';

export const Contribution = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <ContributeSection>
      <TextWrapper>
        {isMobile ? (
          <ContributeDescr>Збережи життя захисників</ContributeDescr>
        ) : (
          <ContributeTitle>
            Зроби внесок <br />
            на маскувальні сітки
          </ContributeTitle>
        )}

        {isMobile ? (
          <ContributeTitle>
            Зроби внесок <br />
            на маскувальні сітки
          </ContributeTitle>
        ) : (
          <ContributeDescr>Збережи життя захисників</ContributeDescr>
        )}
      </TextWrapper>

      <LinksList>
        <LinksListItem>
          <DonateStyledLink to="/#donation">Задонатити</DonateStyledLink>
        </LinksListItem>
        <LinksListItem>
          <OrderStyledLink to="/order">Замовити сітку</OrderStyledLink>
        </LinksListItem>
      </LinksList>
    </ContributeSection>
  );
};
