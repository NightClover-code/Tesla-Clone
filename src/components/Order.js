//importing libraries, components and styles
import React, { useEffect, useRef } from 'react';
import { ButtonsContainer, Button } from './OrderElements';
import AOS from 'aos';
import 'aos/dist/aos.css';
//scroll magic
import ScrollMagic from 'scrollmagic';

//Ordering tesla cars 'buttons' component
const Order = ({ currentImage }) => {
  //initializing AOS library
  const buttonsRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: '.model1',
      duration: 500,
      triggerHook: 0.75,
    })
      .addTo(controller)
      .setClassToggle(buttonsRef.current, 'fade-in');
  }, [currentImage]);
  return (
    <ButtonsContainer ref={buttonsRef} className="buttons-container">
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="button-left-fade"
      >
        <Button className="dark-btn">Order now</Button>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="button-right-fade"
      >
        <Button className="light-btn">Learn More</Button>
      </div>
    </ButtonsContainer>
  );
};

export default Order;
