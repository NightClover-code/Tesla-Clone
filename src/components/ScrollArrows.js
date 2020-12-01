import React, { useRef, useState, useEffect } from 'react';
import { ScrollArrowsContainer, ScrollArrow } from './ScrollArrowsElements';
//jump library
import jump from 'jump.js';
//App component
const ScrollArrows = ({ images }) => {
  //ref to arrows
  const arrowUp = useRef(null);
  const arrowDown = useRef(null);
  //state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);
  //onclick
  const onArrowUpClick = () => {
    setTimeout(() => setLoading(true), 10);
    setTimeout(() => setLoading(false), 1000);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      jumpTo(images[currentIndex - 1]);
    } else {
      setCurrentIndex(0);
    }
  };
  const onArrowDownClick = () => {
    setTimeout(() => setLoading(true), 10);
    setTimeout(() => setLoading(false), 1000);
    if (currentIndex < 6) {
      setCurrentIndex(currentIndex + 1);
      jumpTo(images[currentIndex + 1]);
    } else {
      setCurrentIndex(6);
    }
  };
  const jumpTo = image => {
    jump(image);
  };
  return (
    <ScrollArrowsContainer className="scroll-Arrows-container">
      <ScrollArrow
        className="scroll-arrow arrow-up"
        disabled={loading}
        ref={arrowUp}
        onClick={onArrowUpClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <rect fill="none" height="24" width="24" />
          <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
        </svg>
      </ScrollArrow>
      <ScrollArrow
        disabled={loading}
        className="scroll-arrow arrow-down"
        ref={arrowDown}
        onClick={onArrowDownClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <rect fill="none" height="24" width="24" />
          <path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
        </svg>
      </ScrollArrow>
    </ScrollArrowsContainer>
  );
};

export default ScrollArrows;
