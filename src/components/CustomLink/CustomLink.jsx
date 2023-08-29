import PropTypes from 'prop-types';
import { StyledHashLink, StyledLink } from './CustomLink.styled';
import { handleScrollToTop } from 'utils/handleScrollToTop';

export const CustomLink = ({
  type,
  text,
  path,
  variant,
  onClick = () => null,
}) => {
  return (
    <>
      {type === 'link' && (
        <StyledLink to={path} variant={variant} onClick={handleScrollToTop}>
          {text}
        </StyledLink>
      )}
      {type === 'hashLink' && (
        <StyledHashLink onClick={onClick} variant={variant}>
          {text}
        </StyledHashLink>
      )}
    </>
  );
};

CustomLink.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string,
  variant: PropTypes.string.isRequired,
};
