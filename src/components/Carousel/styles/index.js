import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  transform: ${props => `translateX(${props.position * -props.distance}px)`};
  transition: transform 2s;
`;

export const Container = styled.div`
  width: 800px;
  margin: auto;
  overflow: hidden;
  position: relative;
`;

export const BackButton = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
`;

export const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
`;
