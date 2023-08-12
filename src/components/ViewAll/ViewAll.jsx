import { useMediaQuery } from 'react-responsive';
import { ViewAllIcon, ViewAllLink, ViewAllText } from './ViewAll.styled';
import sprite from 'assets/images/sprite.svg';

export const ViewAll = ({ shortText, longText, changeable }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <ViewAllLink>
      <ViewAllText>
        {changeable ? (isMobile ? shortText : longText) : shortText}
      </ViewAllText>
      <ViewAllIcon>
        <use href={sprite + '#arrow'}></use>
      </ViewAllIcon>
    </ViewAllLink>
  );
};
