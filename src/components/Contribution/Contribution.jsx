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
import useHash from 'hooks/useHash';

export const Contribution = () => {
  const { handleHashScroll } = useHash();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { t } = useTranslation();

  return (
    <ContributeSection>
      <TextWrapper>
        {isMobile ? (
          <ContributeDescr>{t('contribution.save')}</ContributeDescr>
        ) : (
          <ContributeTitle>{t('contribution.donation')}</ContributeTitle>
        )}

        {isMobile ? (
          <ContributeTitle>{t('contribution.donation')}</ContributeTitle>
        ) : (
          <ContributeDescr>{t('contribution.save')}</ContributeDescr>
        )}
      </TextWrapper>

      <LinksList>
        <LinksListItem>
          <CustomLink
            onClick={() => {
              handleHashScroll('donation');
            }}
            type="hashLink"
            text={t('nav.donate')}
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
