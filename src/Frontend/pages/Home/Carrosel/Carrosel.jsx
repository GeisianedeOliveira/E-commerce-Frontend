import React from 'react';
import './Carrosel.css';

import Carousel from 'react-bootstrap/Carousel';

export function Carrosel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
