import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 8%;
`;

export const Button = styled.button`
  margin: 10px;
  width: 250px;
  height: 40px;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
`;
