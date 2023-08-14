import { StyledHashLink, StyledLink } from './CustomLink.styled';

export const CustomLink = ({ type, text, path, variant }) => {
  return (
    <>
      {type === 'link' && (
        <StyledLink to={path} variant={variant}>
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
