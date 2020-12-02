//importing libraries, components and styles
import React from 'react';
import { ButtonsContainer, Button } from './OrderElements';
import 'aos/dist/aos.css';

//Ordering tesla cars 'buttons' component
const Order = ({ buttonsRef, btnLeft, btnRight, btnRightRef, btnLeftRef }) => {
  return (
    <ButtonsContainer ref={buttonsRef} className="buttons-container">
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="button-left-fade"
      >
        <Button className="dark-btn" ref={btnRightRef}>
          {btnLeft}
        </Button>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="button-right-fade"
      >
        <Button className="light-btn" ref={btnLeftRef}>
          {btnRight}
        </Button>
      </div>
    </ButtonsContainer>
  );
};

export default Order;
