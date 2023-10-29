import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../../styles/carousel.css';
import axios from 'axios';

type CarouselProps = {
  textArr: string[];
};

export const Carousel = ({ textArr }: CarouselProps) => {
  const [x, setX] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [shiftWidth, setShiftWidth] = useState(0);

  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const carouselItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (x >= (textArr.length - 2) * itemWidth && shiftWidth > 0) {
      setShiftWidth(-itemWidth);
    } else if (x === itemWidth && shiftWidth < 0) {
      setShiftWidth(itemWidth);
    }
    if (textArr.length > 1) {
      const timeOut = setTimeout(() => {
        setX((prev) => prev + shiftWidth);
      }, 3000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [x, itemWidth]);

  useEffect(() => {
    const ref = carouselItemRef.current;
    if (ref) {
      setWrapperWidth(ref.offsetWidth * textArr.length + 2);
      setItemWidth(ref.offsetWidth);
      setShiftWidth(ref.offsetWidth);
    }
  }, []);

  return (
    <div className="carousel">
      <motion.div
        ref={carouselWrapperRef}
        animate={{ transform: `translateX(${-x}px)` }}
        style={{ width: `${wrapperWidth}px` }}
        className="carousel-wrapper"
      >
        {textArr.map((text) => {
          return (
            <motion.div
              ref={carouselItemRef}
              key={text}
              className="carousel-item"
            >
              {text}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
