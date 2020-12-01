//importing libraries, components and styles
import React, { useEffect, useRef } from 'react';
import { ButtonsContainer, Button } from './OrderElements';
import 'aos/dist/aos.css';
//scroll magic
import ScrollMagic from 'scrollmagic';

//Ordering tesla cars 'buttons' component
const Order = ({ currentImage, buttonsRef, btnLeft, btnRight }) => {
  return (
    <ButtonsContainer ref={buttonsRef} className="buttons-container">
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="button-left-fade"
      >
        <Button className="dark-btn">{btnLeft}</Button>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="button-right-fade"
      >
        <Button className="light-btn">{btnRight}</Button>
      </div>
    </ButtonsContainer>
  );
};

export default Order;
