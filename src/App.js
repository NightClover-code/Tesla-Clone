//imoprting libraries, components and styles
import './css/app.css';
import { Header } from './components/NavElements';
import Nav from './components/Nav';
import React from 'react';
import Content from './components/Content';
import { Main } from './components/ContentElements';
import Order from './components/Order';
//App component
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
