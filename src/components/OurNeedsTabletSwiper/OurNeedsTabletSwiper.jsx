import 'swiper/css';

import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper';

import {
  Location,
  LocationAndNeedTypeContainer,
  NeedsItemDeccription,
  NeedsItemTitel,
} from 'components/OurNeedsItem/OurNeedsItem.styled';
import {
  OurNeedsItemDiv,
  SwiperContainer,
  SwiperSlideContainer,
} from './OurNeedsTabletSwiper.styled';

const OurNeedsTabletSwiper = () => {
  return (
    <SwiperContainer
      spaceBetween={24}
      slidesPerView={2.1}
      modules={[Scrollbar]}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlideContainer>
        <OurNeedsItemDiv>
          <LocationAndNeedTypeContainer>
            <Location>Київ</Location>
          </LocationAndNeedTypeContainer>

          <NeedsItemTitel>Потребумо пластик,капрон</NeedsItemTitel>
          <NeedsItemDeccription>
            {`Пластикова сітка розмір клітинки 3x3,5 см,\nкапронова сітка - розмір клітинки 5x5 см`}
          </NeedsItemDeccription>
        </OurNeedsItemDiv>
      </SwiperSlideContainer>

      <SwiperSlideContainer>
        <OurNeedsItemDiv>
          <LocationAndNeedTypeContainer>
            <Location>Київ</Location>
          </LocationAndNeedTypeContainer>

          <NeedsItemTitel>Щільна темна тканина</NeedsItemTitel>
          <NeedsItemDeccription>
            Щільна темна тканини (для оверлоку сіток та петель)
          </NeedsItemDeccription>
        </OurNeedsItemDiv>
      </SwiperSlideContainer>

      <SwiperSlideContainer>
        <OurNeedsItemDiv>
          <LocationAndNeedTypeContainer>
            <Location>Київ</Location>
          </LocationAndNeedTypeContainer>

          <NeedsItemTitel>Спанбонд</NeedsItemTitel>
          <NeedsItemDeccription>
            Маскувальних кольорів: олива, суха трава, різні видтінки зелені
          </NeedsItemDeccription>
        </OurNeedsItemDiv>
      </SwiperSlideContainer>
    </SwiperContainer>
  );
};

export default OurNeedsTabletSwiper;
