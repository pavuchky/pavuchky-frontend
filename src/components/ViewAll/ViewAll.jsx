import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { ViewAllIcon, ViewAllLink, ViewAllText } from './ViewAll.styled';
import sprite from 'assets/images/sprite.svg';
import { handleScrollToTop } from 'utils/handleScrollToTop';

export const ViewAll = ({ shortText, longText, changeable = false, path }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <ViewAllLink to={path} onClick={handleScrollToTop}>
      <ViewAllText>
        {changeable ? (isMobile ? shortText : longText) : shortText}
      </ViewAllText>
      <ViewAllIcon>
        <use href={sprite + '#arrow'}></use>
      </ViewAllIcon>
    </ViewAllLink>
  );
};

ViewAll.propTypes = {
  shortText: PropTypes.string.isRequired,
  longText: PropTypes.string,
  changeable: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};
