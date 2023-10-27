import { useState, useEffect, useRef } from 'react';
import { motion, useTime } from 'framer-motion';
import '../../styles/carousel.css';

export const Carousel = () => {
  const carouselText = ['text 1', 'text 2', 'text 3'];
  const [x, setX] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const carouselRef = useRef();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (x >= scrollWidth) {
        setX(0);
      } else {
        setX((prevX) => prevX + 10);
      }
    }, 100);

    return () => {
      clearTimeout(timeOut);
    };
  }, [x]);

  console.log(scrollWidth);
  useEffect(() => {
    setScrollWidth(carouselRef.current.scrollWidth);
    console.log(carouselRef.current.scrollWidth);
  }, []);

  return (
    <div ref={carouselRef} className="carousel-wrapper">
      <motion.div
        style={{ transform: `translateX(${-x}px)` }}
        className="carousel-items"
      >
        {carouselText.map((text) => {
          return (
            <motion.div key={text} className="carousel-item">
              {text}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
