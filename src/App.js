import './css/app.css';
import { Header } from './components/NavElements';
import Nav from './components/Nav';
import React from 'react';
import Content from './components/Content';
import { Main } from './components/ContentElements';
import Order from './components/Order';
const App = () => {
  return (
    <div className="app-container">
      <Header>
        <Nav />
      </Header>
      <Main>
        <Content />
        <Order />
      </Main>
    </div>
  );
};

export default App;
