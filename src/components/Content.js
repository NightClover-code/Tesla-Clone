//importing libraries, components and styles
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Title, TextContent, Detail } from './ContentElements';
//importing scroll magic library
import ScrollMagic from 'scrollmagic';
//Text content component
const Content = ({ currentImage, textContentRef, title, detail }) => {
  return (
    <TextContent className="text-content" ref={textContentRef}>
      <Title className="title" data-aos="fade-up">
        {title}
      </Title>
      <Detail
        className="detail"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        {detail}
      </Detail>
    </TextContent>
  );
};

export default Content;
