import React, { useState } from 'react';
import ImageModal from './ImageModal';

function Product({ addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = {
    name: 'Fall Limited Edition Sneakers',
    price: 125.00,
    originalPrice: 250.00,
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    images: ['/images/img1.png', '/images/img2.png', '/images/img3.png', '/images/img4.png'],
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-container">
      <div className="product-images">
        <img 
          src={product.images[currentImageIndex]} 
          alt={product.name} 
          className="main-image"
          onClick={() => setIsModalOpen(true)}
        />
        <div className="thumbnail-container">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="thumbnail"
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <div className="company-name">Sneaker Company</div>
        <h2 className="product-name">{product.name}</h2>
        <div className="price-section">
          <p className="price">${product.price.toFixed(2)} <span className="original-price">${product.originalPrice.toFixed(2)}</span></p>
          <span className="discount">50% OFF</span>
        </div>
        <p className="description">{product.description}</p>
        <div className="quantity-controls">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        images={product.images} 
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />
    </div>
  );
}

export default Product;
