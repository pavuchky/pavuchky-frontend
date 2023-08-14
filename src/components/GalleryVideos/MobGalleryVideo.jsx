import React from 'react';
import useFetch from '../../hooks/useFetch';
import ReactPlayer from 'react-player';

import 'swiper/css/bundle';
import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const MobGalleryVideos = () => {
  const { data } = useFetch('galleryVideo');
  console.log(data);
 
  return (
    <div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        scrollbar={{ draggable: false }}
        modules={[Scrollbar]}
          >
              {data?.galleryVideoList?.map(({ id, index, videoLink }) => (
                  <SwiperSlide key={id} >
                     <ReactPlayer key={id} url={videoLink} />
                  </SwiperSlide>))}
      </Swiper>
    </div>
  );
};
export default MobGalleryVideos;
