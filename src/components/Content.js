//importing libraries, components and styles
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Title, TextContent, Detail } from './ContentElements';
//importing scroll magic library
import ScrollMagic from 'scrollmagic';
//Text content component
const Content = ({ currentImage }) => {
  //ref to the text content
  const textContentRef = useRef(null);
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
      .setClassToggle(textContentRef.current, 'fade-in');
  }, [currentImage]);

  return (
    <TextContent className="text-content" ref={textContentRef}>
      <Title className="title" data-aos="fade-up">
        Only $1.49/Watt for Solar on Existing Roofs
      </Title>
      <Detail
        className="detail"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Lowest Cost in America - Money-back guarantee
      </Detail>
    </TextContent>
  );
};

export default Content;
