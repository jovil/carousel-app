import React, { useState } from 'react';
import CarouselSlide from './CarouselSlide';
import './carousel.css';

const Carousel = () => {
  const [x, setX] = useState(0);
  const carouselArr = [
    <CarouselSlide src={'https://lorempixel.com/1920/1600/sports'} />,
    <CarouselSlide src={'https://lorempixel.com/1920/1600/animals'} />,
    <CarouselSlide src={'https://lorempixel.com/1920/1600/food'} />,
    <CarouselSlide src={'https://lorempixel.com/1920/1600/cats'} />,
    <CarouselSlide src={'https://lorempixel.com/1920/1600/transport'} />
  ];

  const goPrev = () => {
    x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100)
  };

  const goNext = () => {
    x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100)
  };

  return (
    <div className="slider">
      {
        carouselArr.map((item, index) => {
          return (
            <div className="slide" key={index} style={{ transform: `translateX(${x}%)` }}>{item}</div>
          )
        })
      }
      <button className="navigation prev" onClick={goPrev}>Prev</button>
      <button className="navigation next" onClick={goNext}>Next</button>
    </div>
  );
}

export default Carousel;