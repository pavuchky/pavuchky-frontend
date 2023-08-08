import React from 'react';
import { useMediaQuery } from 'react-responsive';
import net from '../../assets/images/work/net.jpg';
import net_x from '../../assets/images/work/net@2x.jpg';
import picture from '../../assets/images/work/picture.jpg';
import picture_x from '../../assets/images/work/picture@2x.jpg';
import military from '../../assets/images/work/military.jpg';
import military_x from '../../assets/images/work/military@2x.jpg';
import svg from '../../assets/images/sprite.svg';
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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });

  const work = [
    {
      src: net,
      srcSet: `${net} 1x, ${net_x} 2x`,
      alt: 'net',
      text: 'Це рятує життя наших воїнів',
      href: 'https://m.facebook.com/story.php?story_fbid=pfbid0e9mvLc4noXxoG8GCDnUmZqjfUXy3cWLDcnGpztq6Eo14YuXPqeXb8nNJqTxzs3GDl&id=1245597040',
    },
    {
      src: picture,
      srcSet: `${picture} 1x, ${picture_x} 2x`,
      alt: 'picture',
      text: 'Намалюй малюнок підтримай воїнів',
      href: 'https://m.facebook.com/story.php?story_fbid=pfbid022bT4Yy7UCYj2mS1CiXpDacXttZx929mc5n98Y6oDYBtbzpVQmit8jtaCbGWwsCQ4l&id=1245597040',
    },
    {
      src: military,
      srcSet: `${military} 1x, ${military_x} 2x`,
      alt: 'military',
      text: 'Працюємо не покладаючи рук',
      href: 'https://m.facebook.com/story.php?story_fbid=pfbid02FzvAAzi9727tgzJzT6RVPPRKkSR3xodvPugHzypE8PmbiyvzYT1ESXiATTCa7YZnl&id=1245597040',
    },
  ];

  const tabletWork = isTablet ? work.slice(0, 2) : work;

  return (
    <WorkContainer>
      <WorkBlockTitle>
        <WorkTitle>Що ми робимо</WorkTitle>
        <FacebookBtn
          href="https://www.facebook.com/PavuchkyBorschahinky"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isMobile ? 'Усе' : 'Переглянути усе'}
          <svg width="11px" height="13px">
            <use href={svg + '#arrow'}></use>
          </svg>
        </FacebookBtn>
      </WorkBlockTitle>

      <WorkList>
        {tabletWork.map(item => (
          <WorkItem>
            <WorkImg srcSet={item.srcSet} src={item.src} alt={item.alt} />
            <WorkBlock>
              <WorkText>{item.text}</WorkText>
              <WorkItemBtn
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Переглянути
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
