import styled from 'styled-components';
export const Header = styled.header``;
//nav elements using styled components
export const NavContainer = styled.div`
  display: block;
  width: 95%;
  position: absolute;
  left: 10px;
  top: 0;
`;
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 98%;
`;
export const Logo = styled.div`
  display: inline-block;
  width: 150px;
  height: 50px;
`;

export const Products = styled.ul`
  text-align: center;
  margin-top: 15px;
  margin-left: 80px;
`;
export const Product = styled.li`
  display: inline;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 15px;
  list-style: none;
  padding: 0.5rem;
  letter-spacing: 1.2px;
`;
export const ItemName = styled.a`
  text-transform: uppercase;
  color: #000;
  text-decoration: none;
`;
export const Commerce = styled.ul`
  margin-top: 15px;
`;
export const Shop = styled.li`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  list-style: none;
  padding: 0.5rem;
  display: inline;
  font-size: 15px;
  letter-spacing: 1.2px;
`;
export const Account = styled.li`
  display: inline;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  list-style: none;
  font-size: 15px;
  padding: 0.5rem;
  letter-spacing: 1.2px;
`;
