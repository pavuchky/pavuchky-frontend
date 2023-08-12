import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './ImageModal.css'; // Підключте ваші стилі для модального вікна

const ImageModal = ({ isOpen, images, selectedImageIndex, onClose, setSelectedImageIndex }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="image-modal-overlay">
            <div className="image-modal-content">
                <Carousel
                    selectedItem={selectedImageIndex}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    showArrows={true}
                    dynamicHeight={true}
                    infiniteLoop={true}
                    onChange={setSelectedImageIndex}
                    onCloseClick={onClose}
                >
                    {images.map((img, index) => (
                        <div key={index}>
                            <img src={img.original} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
                <button className="image-modal-close" onClick={onClose}>
                    Закрити
                </button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default ImageModal;

// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// // import { Navigation } from 'swiper/modules';

// import 'swiper/css/navigation';


// import './ImageModal.css';
// import { Navigation } from 'swiper';



// const ImageModal = ({ isOpen, images, selectedImageIndex, onClose }) => {
//     if (!isOpen) return null;

//     return ReactDOM.createPortal(
//         <div className="image-modal-overlay">
//             <div className="image-modal-content">
//                 <Swiper
//                     navigation
//                     initialSlide={selectedImageIndex}
//                     spaceBetween={16}
//                     slidesPerView={1}
//                     allowTouchMove
//                     modules={[Navigation]}
//                 >
//                     {images.map((img, index) => (
//                         <SwiperSlide key={index}>
//                             <img src={img.original} alt={`Gallery ${index + 1}`} />
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 <button className="image-modal-close" onClick={onClose}>
//                     Закрити
//                 </button>
//             </div>
//         </div>,
//         document.getElementById('modal-root')
//     );
// };

// export default ImageModal;