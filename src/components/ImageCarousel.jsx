// ImageCarousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { carouselImages } from './CarouselImages';

const ImageCarousel = () => (
  <div className="image-carousel">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={4000}
      dynamicHeight={false}
    >
        {images.map((src, idx) => (
          <div key={idx}>
            <img src={src} alt={`Event center ${idx + 1}`} style={{ maxHeight: 400, objectFit: 'cover', width: '100%' }} />
          </div>
        ))}
    </Carousel>
  </div>
);

export default ImageCarousel;
const images = [
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
];
