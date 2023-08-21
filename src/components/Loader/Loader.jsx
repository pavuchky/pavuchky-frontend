import PropTypes from 'prop-types';
import { LoaderWrapper, StyledLoader } from './Loader.styled';

export const Loader = ({ variant }) => {
  return (
    <LoaderWrapper variant={variant}>
      <StyledLoader></StyledLoader>
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  variant: PropTypes.string,
};
