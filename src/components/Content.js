//importing libraries, components and styles
import React from 'react';
import 'aos/dist/aos.css';
import { Title, TextContent, Detail } from './ContentElements';
//Text content component
const Content = ({ textContentRef, title, detail }) => {
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
