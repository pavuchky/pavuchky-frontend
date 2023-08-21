import 'swiper/css';
import { useTranslation } from 'react-i18next';

import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper';

import {
  Location,
  LocationAndNeedTypeContainer,
  NeedsItemContact,
  NeedsItemDeccription,
  NeedsItemTitel,
} from 'components/OurNeedsItem/OurNeedsItem.styled';
import {
  OurNeedsItemDiv,
  SwiperContainer,
  SwiperSlideContainer,
} from './OurNeedsTabletSwiper.styled';

const OurNeedsTabletSwiper = () => {
  const { t } = useTranslation();

  return (
    <SwiperContainer
      spaceBetween={24}
      slidesPerView={2.03}
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlideContainer>
        <OurNeedsItemDiv>
          <LocationAndNeedTypeContainer>
            <Location>{`${t('ourNeeds.city')}`}</Location>
          </LocationAndNeedTypeContainer>

          <NeedsItemTitel>{`${t('ourNeeds.needPlastic')}`}</NeedsItemTitel>
          <NeedsItemDeccription>
            {`${t('ourNeeds.plasticMesh')}`}
          </NeedsItemDeccription>
          <NeedsItemContact href="#contacts">{`${t(
            'ourNeeds.administratorContacts'
          )}`}</NeedsItemContact>
        </OurNeedsItemDiv>
      </SwiperSlideContainer>

      <SwiperSlideContainer>
        <OurNeedsItemDiv>
          <LocationAndNeedTypeContainer>
            <Location>{`${t('ourNeeds.city')}`}</Location>
          </LocationAndNeedTypeContainer>

          <NeedsItemTitel>{`${t('ourNeeds.darkFabric')}`}</NeedsItemTitel>
          <NeedsItemDeccription>
            {`${t('ourNeeds.fabricForOverlocking')}`}
          </NeedsItemDeccription>
          <NeedsItemContact href="#contacts">{`${t(
            'ourNeeds.administratorContacts'
          )}`}</NeedsItemContact>
        </OurNeedsItemDiv>
      </SwiperSlideContainer>

      <SwiperSlideContainer>
        <OurNeedsItemDiv>
          <LocationAndNeedTypeContainer>
            <Location>{`${t('ourNeeds.city')}`}</Location>
          </LocationAndNeedTypeContainer>

          <NeedsItemTitel>{`${t('ourNeeds.spunbond')}`}</NeedsItemTitel>
          <NeedsItemDeccription>
            {`${t('ourNeeds.camouflageColors')}`}
          </NeedsItemDeccription>
          <NeedsItemContact href="#contacts">{`${t(
            'ourNeeds.administratorContacts'
          )}`}</NeedsItemContact>
        </OurNeedsItemDiv>
      </SwiperSlideContainer>
    </SwiperContainer>
  );
};

export default OurNeedsTabletSwiper;
