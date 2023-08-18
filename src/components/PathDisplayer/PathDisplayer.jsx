import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { PathArrow, PathLink, PathWrapper } from './PathDisplayer.styled';
import sprite from 'assets/images/sprite.svg';

export const PathDisplayer = ({ current, isGallery = false }) => {
  const { t } = useTranslation();
  const homePage = { path: '/', name: t('nav.main') };

  return (
    <PathWrapper>
      <PathLink
        to={homePage.path}
        dangerouslySetInnerHTML={{ __html: homePage.name }}
      />
      <PathArrow>
        <use href={sprite + '#path-arrow'}></use>
      </PathArrow>
      <PathLink
        to={current.path}
        dangerouslySetInnerHTML={{ __html: current.name }}
      />

      {isGallery && (
        <>
          <PathArrow>
            <use href={sprite + '#path-arrow'}></use>
          </PathArrow>
          <PathLink
            to={current.path}
            dangerouslySetInnerHTML={{ __html: current.galleryType }}
          />
        </>
      )}
    </PathWrapper>
  );
};

PathDisplayer.propTypes = {
  current: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    galleryType: PropTypes.string,
  }).isRequired,
  isGallery: PropTypes.bool,
};
