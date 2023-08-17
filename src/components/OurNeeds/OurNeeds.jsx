import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

import {
  OurNeedsHeading,
  OurNeedsList,
  OurNeedsSection,
} from './OurNeeds.styled';
import OurNeedsItem from 'components/OurNeedsItem/OurNeedsItem';
import OurNeedsTabletSwiper from 'components/OurNeedsTabletSwiper/OurNeedsTabletSwiper';

const OurNeeds = () => {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesctopScreen = useMediaQuery({ minWidth: 1440 });
  const { t } = useTranslation();

  return (
    <OurNeedsSection>
      <OurNeedsHeading>
        {isTabletScreen
          ? `${t('ourNeeds.whatWeNeed')}`
          : `${t('ourNeeds.weNeed')}`}
      </OurNeedsHeading>
      {isTabletScreen && !isDesctopScreen ? (
        <OurNeedsTabletSwiper />
      ) : (
        <OurNeedsList>
          <OurNeedsItem
            location={`${t('ourNeeds.city')}`}
            needType={`${t('ourNeeds.needsType')}`}
            titel={`${t('ourNeeds.needPlastic')}`}
            description={`${t('ourNeeds.plasticMesh')}`}
            contact={`${t('ourNeeds.administratorContacts')}`}
          />
          <OurNeedsItem
            location={`${t('ourNeeds.city')}`}
            needType={`${t('ourNeeds.needsType')}`}
            titel={`${t('ourNeeds.darkFabric')}`}
            description={`${t('ourNeeds.fabricForOverlocking')}`}
            contact={`${t('ourNeeds.administratorContacts')}`}
          />
          <OurNeedsItem
            location={`${t('ourNeeds.city')}`}
            needType={`${t('ourNeeds.needsType')}`}
            titel={`${t('ourNeeds.spunbond')}`}
            description={`${t('ourNeeds.camouflageColors')}`}
            contact={`${t('ourNeeds.administratorContacts')}`}
          />
        </OurNeedsList>
      )}
    </OurNeedsSection>
  );
};

export default OurNeeds;
