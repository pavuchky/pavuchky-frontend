import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import useFetch from 'hooks/useFetch';
import svg from '../../assets/images/sprite.svg';
import { LanguageContext } from 'utils/LanguageContext';
import {
  WorkBlock,
  WorkItemBtn,
  WorkContainer,
  WorkImg,
  WorkItem,
  WorkList,
  WorkText,
  WorkTitle,
  FacebookBtn,
  WorkBlockTitle,
} from './OurWork.styled';

export const OurWork = () => {
  const { data } = useFetch('posts');
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const tabletCards = isTablet ? 2 : data?.postsList.length;

  return (
    <WorkContainer>
      <WorkBlockTitle>
        <WorkTitle>{t('aboutUs.whatWeDo')}</WorkTitle>
        <FacebookBtn
          href="https://www.facebook.com/PavuchkyBorschahinky"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isMobile ? t('nav.all') : t('nav.viewAll')}
          <svg width="11px" height="13px">
            <use href={svg + '#arrow'}></use>
          </svg>
        </FacebookBtn>
      </WorkBlockTitle>

      <WorkList>
        {data?.postsList
          .slice(0, tabletCards)
          .map(({ id, postDesc, postImage, postLink }) => (
            <WorkItem key={id}>
              <WorkImg src={postImage} alt="picture" />
              <WorkBlock>
                <WorkText>{postDesc[lang]}</WorkText>
                <WorkItemBtn
                  href={postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('nav.viewMore')}
                  <svg width="11px" height="13px">
                    <use href={svg + '#arrow'}></use>
                  </svg>
                </WorkItemBtn>
              </WorkBlock>
            </WorkItem>
          ))}
      </WorkList>
    </WorkContainer>
  );
};
