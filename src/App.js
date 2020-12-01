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
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentData, setCurrentData] = useState(data[0]);
  return (
    <div className="app-container">
      <Header>
        <Nav />
      </Header>
      <Main>
        <ScrollArrows images={images} />
        <Content images={images} />
        <Order images={images} />
      </Main>
    </div>
  );
};

export default App;
