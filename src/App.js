///importing styles
import './css/app.css';
//AOS library
import AOS from 'aos';
//importing scroll magic library
import ScrollMagic from 'scrollmagic';
//imoprting components
import { Header } from './components/NavElements';
import Nav from './components/Nav';
import React, { useState, useRef, useEffect } from 'react';
import Content from './components/Content';
import { Main } from './components/ContentElements';
import Order from './components/Order';
import ScrollArrows from './components/ScrollArrows';
//importing data
import data from './components/util';
import jump from 'jump.js';
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
  //scroll To top on page load
  useEffect(() => {
    jump('.banner');
  }, []);
  //state
  const [detail, setDetail] = useState(data[0].detail);
  const [btnLeft, setBtnLeft] = useState(data[0].btnLeft);
  const [btnRight, setBtnRight] = useState(data[0].btnRight);
  const [title, setTitle] = useState(data[0].title);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentData, setCurrentData] = useState(data[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  //Order buttons
  const buttonsRef = useRef(null);
  const btnRightRef = useRef(null);
  const btnLeftRef = useRef(null);
  const listItemsRef = useRef(null);
  const logoRef = useRef(null);
  //ref to the text content
  const textContentRef = useRef(null);
  useEffect(() => {
    setCurrentImage(images[currentIndex]);
  }, [currentIndex]);
  useEffect(() => {
    setCurrentData(data[currentIndex]);
  }, [currentIndex]);
  useEffect(() => {
    getData(currentData, currentIndex);
  }, [currentData, currentIndex]);
  useEffect(() => {
    //initializing AOS library
    AOS.init({
      duration: 750,
    });
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: `.${currentImage.classList[1]}`,
      duration: 500,
      triggerHook: 0.9,
    })
      .addTo(controller)
      .setClassToggle(buttonsRef.current, 'fade-in');
  }, [buttonsRef, currentImage]);
  useEffect(() => {
    //initializing AOS library
    AOS.init({
      duration: 2000,
    });
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: `.${currentImage.classList[1]}`,
      duration: 500,
      triggerHook: 0.9,
    })
      .addTo(controller)
      .setClassToggle(textContentRef.current, 'fade-in');
  }, [currentImage, textContentRef]);

  //onclick
  const onArrowUpClick = () => {
    setTimeout(() => setLoading(true), 10);
    setTimeout(() => setLoading(false), 1000);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      jumpTo(images[currentIndex - 1]);
    } else {
      setCurrentIndex(0);
    }
  };
  const onArrowDownClick = () => {
    setTimeout(() => setLoading(true), 10);
    setTimeout(() => setLoading(false), 1000);
    if (currentIndex < 6) {
      setCurrentIndex(currentIndex + 1);
      jumpTo(images[currentIndex + 1]);
    } else {
      setCurrentIndex(6);
    }
  };
  const jumpTo = image => {
    jump(image);
  };
  const getData = (currentData, currentIndex) => {
    if (currentIndex < 6) {
      btnLeftRef.current.classList.remove('hide');
      setTimeout(() => {
        setDetail(currentData.detail);
        setTitle(currentData.title);
        setBtnLeft(currentData.buttonLeft);
        setBtnRight(currentData.buttonRight);
      }, 500);
    } else {
      setTimeout(() => {
        setTitle(currentData.title);
        setDetail('');
        btnLeftRef.current.classList.add('hide');
        setBtnLeft(currentData.button);
      }, 500);
    }
  };
  const onProductsClick = event => {
    setTimeout(() => listItemsRef.current.classList.add('disable'), 10);
    setTimeout(() => listItemsRef.current.classList.remove('disable'), 1000);
    jump(`.${event.target.getAttribute('data-id')}`);
    setCurrentIndex(event.target.getAttribute('data-number'));
  };
  const onLogoClick = () => {
    setTimeout(() => logoRef.current.classList.add('disable'), 10);
    setTimeout(() => logoRef.current.classList.remove('disable'), 1000);
    jump('.banner');
    setCurrentIndex(0);
    setTimeout(() => {
      setDetail(data[0].detail);
      setTitle(data[0].title);
      setBtnLeft(data[0].buttonLeft);
      setBtnRight(data[0].buttonRight);
    }, 2000);
  };
  return (
    <div className="app-container">
      <Header>
        <Nav
          onProductsClick={onProductsClick}
          onLogoClick={onLogoClick}
          listItemsRef={listItemsRef}
          logoRef={logoRef}
        />
      </Header>
      <Main>
        <ScrollArrows
          images={images}
          buttonsRef={buttonsRef}
          textContentRef={textContentRef}
          onArrowDownClick={onArrowDownClick}
          onArrowUpClick={onArrowUpClick}
          loading={loading}
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
          btnRightRef={btnRightRef}
          btnLeftRef={btnLeftRef}
        />
      </Main>
    </div>
  );
};

export default App;
