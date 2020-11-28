//imoprting libraries, components and styles
import './css/app.css';
import { Header } from './components/NavElements';
import Nav from './components/Nav';
import React from 'react';
import Content from './components/Content';
import { Main } from './components/ContentElements';
import Order from './components/Order';
import ScrollMagic from 'scrollmagic';
import ScrollArrows from './components/ScrollArrows';
//App component
const App = () => {
  const controller = new ScrollMagic.Controller();
  return (
    <div className="app-container">
      <Header>
        <Nav />
      </Header>
      <Main>
        <ScrollArrows />
        <Content controller={controller} />
        <Order controller={controller} />
      </Main>
    </div>
  );
};

export default App;
