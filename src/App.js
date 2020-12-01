///importing styles
import './css/app.css';
//imoprting components
import { Header } from './components/NavElements';
import Nav from './components/Nav';
import React, { useState, useRef, useEffect } from 'react';
import Content from './components/Content';
import { Main } from './components/ContentElements';
import Order from './components/Order';
import ScrollArrows from './components/ScrollArrows';
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
//Order buttons Ref
//App component
const App = () => {
  //state
  const [detail, setDetail] = useState('detail');
  const [btnLeft, setBtnLeft] = useState('order baby left');
  const [btnRight, setBtnRight] = useState('order baby right');
  const [title, setTitle] = useState('buy stuff please');
  //Order buttons
  const buttonsRef = useRef(null);
  //ref to the text content
  const textContentRef = useRef(null);
  const getData = currentData => {
    setDetail(currentData.detail);
    setTitle(currentData.title);
    setBtnLeft(currentData.buttonLeft);
    setBtnRight(currentData.buttonRight);
  };
  return (
    <div className="app-container">
      <Header>
        <Nav />
      </Header>
      <Main>
        <ScrollArrows
          images={images}
          buttonsRef={buttonsRef}
          textContentRef={textContentRef}
          getData={getData}
        />

        <Content
          images={images}
          textContentRef={textContentRef}
          title={title}
          detail={detail}
        />
        <Order
          images={images}
          buttonsRef={buttonsRef}
          btnLeft={btnLeft}
          btnRight={btnRight}
        />
      </Main>
    </div>
  );
};

export default App;
