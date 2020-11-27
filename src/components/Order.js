import React, { useEffect } from 'react';
import { ButtonsContainer, Button } from './OrderElements';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Order = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <ButtonsContainer>
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
