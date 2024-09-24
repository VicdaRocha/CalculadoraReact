import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  background-color: #aafeaa;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: 11f011;
  width: 80%;
  min-height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Keyboard = styled.div`
  background-color: 11f011;
  width: 400px;
  height: 500px;
  // width: 80%;
  // min-height: 350px;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  // align-items: center;
  // justify-items: center;

  // display: flex;
  // flex-direction: row;
  // align-items: flex-start;
  // justify-content: center;
`
