import PropTypes from 'prop-types';
import { StyledHashLink, StyledLink } from './CustomLink.styled';
import { handleScrollToTop } from 'utils/handleScrollToTop';

export const CustomLink = ({ type, text, path, variant }) => {
  return (
    <>
      {type === 'link' && (
        <StyledLink to={path} variant={variant} onClick={handleScrollToTop}>
          {text}
        </StyledLink>
      )}
      {type === 'hashLink' && (
        <StyledHashLink to={path} variant={variant}>
          {text}
        </StyledHashLink>
      )}
    </>
  );
};

CustomLink.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
