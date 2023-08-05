import { useMediaQuery } from 'react-responsive';

import {
  OurNeedsHeading,
  OurNeedsList,
  OurNeedsSection,
} from './OurNeeds.styled';
import OurNeedsItem from 'components/OurNeedsItem/OurNeedsItem';
import OurNeedsTabletSwiper from 'components/OurNeedsTabletSwiper/OurNeedsTabletSwiper';

const OurNeeds = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesctopScreen = useMediaQuery({ minWidth: 1280 });

  return (
    <OurNeedsSection>
      <OurNeedsHeading>
        {isTabletScreen ? 'Що ми потребуємо' : 'Ми потребуємо'}
      </OurNeedsHeading>
      {isTabletScreen && !isDesctopScreen ? (
        <OurNeedsTabletSwiper />
      ) : (
        <OurNeedsList>
          <OurNeedsItem
            location="Київ"
            needType="військові"
            titel="Потребумо пластик,капрон"
            description={`Пластикова сітка розмір клітинки 3x3,5 см,\nкапронова сітка - розмір клітинки 5x5 см`}
            contact="Ольга Кузакова"
          />
          <OurNeedsItem
            location="Київ"
            needType="військові"
            titel="Щільна темна тканина"
            description="Щільна темна тканини (для оверлоку сіток та петель)"
            contact="Ольга Кузакова"
          />
          <OurNeedsItem
            location="Київ"
            needType="військові"
            titel="Спанбонд"
            description="Маскувальних кольорів: олива, суха трава, різні видтінки зелені"
            contact="Ольга Кузакова"
          />
        </OurNeedsList>
      )}
    </OurNeedsSection>
  );
};

export default OurNeeds;
