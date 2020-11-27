import styled from 'styled-components';
export const Main = styled.main``;
//title text and detail using styled components
export const TextContent = styled.div`
  display: block;
  position: fixed;
  top: 15%;
  left: 0;
  width: 100%;
`;
export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 35px;
  transform: translate(0, +50px);
`;

export const Detail = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  transform: translate(0, 0px);
`;
