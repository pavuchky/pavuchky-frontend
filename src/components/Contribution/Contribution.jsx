import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { CustomLink } from 'components/CustomLink/CustomLink';
import {
  ContributeSection,
  ContributeDescr,
  ContributeTitle,
  LinksList,
  LinksListItem,
  TextWrapper,
} from './Contribution.styled';

export const Contribution = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { t } = useTranslation();

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
          <CustomLink
            type="hashLink"
            text={t('nav.donate')}
            path="/#donation"
            variant="blue"
          />
        </LinksListItem>
        <LinksListItem>
          <CustomLink
            type="link"
            text={t('contribution.order')}
            path="/order"
            variant="yellow"
          />
        </LinksListItem>
      </LinksList>
    </ContributeSection>
  );
};
