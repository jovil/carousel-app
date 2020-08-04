import React from 'react';
import './carouselSlide.css';

const CarouselSlide = ({ src }) => {
  return (
    <img className="carousel-img" src={src} alt="slide-img" />
  );
}

export default CarouselSlide;