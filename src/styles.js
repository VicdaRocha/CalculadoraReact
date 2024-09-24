import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  background-color: rgb(170, 254, 170);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`

  width: fit-content;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Keyboard = styled.div`

  margin: 1rem 0;
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
`
