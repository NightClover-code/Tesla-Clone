import styled from 'styled-components';
export const ScrollArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  position: fixed;
  top: 50%;
  right: 15px;
  transform: translate(-50%, -50%);
`;

export const ScrollArrow = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  cursor: pointer;
`;
