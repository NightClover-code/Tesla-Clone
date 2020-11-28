///importing styles
import './css/app.css';
//imoprting components
import { Header } from './components/NavElements';
import Nav from './components/Nav';
import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import { Main } from './components/ContentElements';
import Order from './components/Order';
//importing scroll magic library
import ScrollMagic from 'scrollmagic';
import ScrollArrows from './components/ScrollArrows';
//jump library
import jump from 'jump.js';
//importing data
import data from './components/util';
//ref to background images
const banner = document.querySelector('.banner');
const model1 = document.querySelector('.model1');
const model2 = document.querySelector('.model2');
const model3 = document.querySelector('.model3');
const model4 = document.querySelector('.model4');
const solarPanel = document.querySelector('.solar-panel');
const accessories = document.querySelector('.accessories');
//background images
const images = [
  banner,
  model1,
  model2,
  model3,
  model4,
  solarPanel,
  accessories,
];
//App component
const App = () => {
  //current Index State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  //onclick
  const onArrowClick = direction => {
    setLoading(true);
    //if user clicked on arrow up button
    if (direction === 'go-up') {
      setTimeout(() => setLoading(false), 1000);
      //animation to next section
      if (currentIndex > 0) {
        setCurrentImage(images[currentIndex]);
        jumpTo(images[currentIndex - 1]);
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(0);
      }
      //if user clicked on arrow down button
    } else if (direction === 'go-down') {
      setTimeout(() => setLoading(false), 1000);
      //animation to next section
      if (currentIndex < 8) {
        setCurrentImage(images[currentIndex]);
        jumpTo(images[currentIndex + 1]);
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(8);
      }
    }
  };
  //jump to an element
  const jumpTo = image => {
    jump(image);
  };
  return (
    <div className="app-container">
      <Header>
        <Nav />
      </Header>
      <Main>
        <ScrollArrows
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          images={images}
          onArrowClick={onArrowClick}
          loading={loading}
          currentImage={currentImage}
        />
        <Content />
        <Order />
      </Main>
    </div>
  );
};

export default App;
