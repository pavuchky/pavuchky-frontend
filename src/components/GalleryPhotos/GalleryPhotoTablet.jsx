import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import ImageModal from './ImageModal';

import {
  GalleryTabGridContainer,
  GalleryTabButton,
  GalleryTabImg,
} from './GalleryPhotoTablet.styled';

const GalleryTabPhotos = () => {
  const { data } = useFetch('galleryPhoto');

  const [visibleImages, setVisibleImages] = useState(2);

  const loadMoreImages = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 2);
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = index => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <div id="gallery/photos">
        <GalleryTabGridContainer>
          {data?.galleryPhotoList
            ?.slice(0, visibleImages)
            .map((photoLink, index) => {
              return (
                <GalleryTabImg
                  key={index}
                  src={photoLink.photoLink}
                  alt="Varior"
                  onClick={() => openLightbox(index)}
                />
              );
            })}
        </GalleryTabGridContainer>
        <ImageModal
          isOpen={lightboxOpen}
          images={data?.galleryPhotoList?.photoLink}
          selectedImageIndex={selectedImageIndex}
          onClose={closeLightbox}
        />
      </div>
      <div>
        {visibleImages < data?.galleryPhotoList.length && (
          <GalleryTabButton onClick={loadMoreImages}>
            Переглянути більше
          </GalleryTabButton>
        )}
      </div>
    </>
  );
};

export default GalleryTabPhotos;

// import React, { useState } from 'react';

// import { GalleryTabGridContainer, GalleryTabButton, GalleryTabImg } from './GalleryPhotoTablet.styled';

// import  useFetch  from "../../hooks/useFetch";

// const GalleryTabPhotos = () => {
//   const imagesPerPage = 2;

//   const { data} = useFetch('galleryPhoto');
//   console.log(data);

//   const [currentPage, setCurrentPage] = useState(1);

//   // Розрахунок діапазону індексів для поточної сторінки
//   const startIndex = (currentPage - 1) * imagesPerPage;
//   const endIndex = startIndex + imagesPerPage;

//   // Витягуємо підмасив зображень для поточної сторінки
//   const imagesToDisplay = data?.galleryPhotoList?.slice(startIndex, endIndex);

//   return (
//     <>
//       <div>
//         <GalleryTabGridContainer>
//           {data?.galleryPhotoList?.map(( id, photoLink) => (
//             <GalleryTabImg key={photoLink} src={photoLink} alt="Varior" />
//           ))}
//         </GalleryTabGridContainer>
//       </div>
//       <div>
//         {/* Кнопки пагінації */}
//         <GalleryTabButton
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage(currentPage - 1)}
//         >
//           Попередня сторінка
//         </GalleryTabButton>
//         <GalleryTabButton
//           disabled={endIndex >= data?.galleryPhotoList?.length}
//           onClick={() => setCurrentPage(currentPage + 1)}
//         >
//           Наступна сторінка
//         </GalleryTabButton>
//       </div>
//     </>
//   );
// };

// export default GalleryTabPhotos;
