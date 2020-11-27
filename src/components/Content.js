import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Title, TextContent, Detail } from './ContentElements';
const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <TextContent className="text-content">
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
