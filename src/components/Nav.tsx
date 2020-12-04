//importing nav elements
import {
  Account,
  Commerce,
  ItemName,
  Logo,
  NavBar,
  NavContainer,
  Product,
  Products,
  Shop,
} from './NavElements';
import React from 'react';
//types
interface Props {
  onProductsClick: (event: any) => void;
  onLogoClick: () => void;
  listItemsRef: React.RefObject<HTMLUListElement>;
  logoRef: React.RefObject<HTMLDivElement>;
}
//Nav Component
const Nav: React.FC<Props> = ({
  onProductsClick,
  onLogoClick,
  listItemsRef,
  logoRef,
}) => {
  const onLogoClickCall = () => {
    onLogoClick();
  };
  const onNavClick = (event: any) => {
    onProductsClick(event);
  };
  return (
    <NavContainer className="nav-container">
      <NavBar>
        <Logo className="logo" onClick={onLogoClickCall} ref={logoRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="110"
            viewBox="-41.8008 -9.08425 362.2736 54.5055"
          >
            <path d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07" />
          </svg>
        </Logo>
        <Products onClick={onNavClick} ref={listItemsRef}>
          <Product className="list-item" data-id="model1" data-number="1">
            <ItemName
              href="#"
              className="item-name"
              data-id="model1"
              data-number="1"
            >
              Model S
            </ItemName>
          </Product>
          <Product className="list-item" data-id="model2" data-number="2">
            <ItemName
              className="item-name"
              href="#"
              data-id="model2"
              data-number="2"
            >
              Model 3
            </ItemName>
          </Product>
          <Product data-id="model3" data-number="3" className="list-item">
            <ItemName
              href="#"
              data-id="model3"
              data-number="3"
              className="item-name"
            >
              Model X
            </ItemName>
          </Product>
          <Product data-id="model4" data-number="4" className="list-item">
            <ItemName
              href="#"
              data-id="model4"
              data-number="4"
              className="item-name"
            >
              Model Y
            </ItemName>
          </Product>
          <Product data-id="solar-panel" data-number="5" className="list-item">
            <ItemName
              href="#"
              data-id="solar-panel"
              data-number="5"
              className="item-name"
            >
              Solar Panels
            </ItemName>
          </Product>
          <Product data-id="accessories" data-number="6" className="list-item">
            <ItemName
              href="#"
              data-id="accessories"
              data-number="6"
              className="item-name"
            >
              Accessories
            </ItemName>
          </Product>
        </Products>
        <Commerce>
          <Shop>
            <ItemName>Shop</ItemName>
          </Shop>
          <Account>
            <ItemName>Tesla Account</ItemName>
          </Account>
        </Commerce>
      </NavBar>
    </NavContainer>
  );
};

export default Nav;
