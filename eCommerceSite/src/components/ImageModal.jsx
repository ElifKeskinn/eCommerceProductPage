import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// nihat hocaya react slick kullanabilir miyim 
// o da eğer biliyosan kullan dedi ben de kullandım :))
function ImageModal({ isOpen, onClose, images, currentIndex, onIndexChange }) {
  if (!isOpen) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: currentIndex,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: index => onIndexChange(index),
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ImageModal;
