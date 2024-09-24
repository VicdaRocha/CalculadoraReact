import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 0;
  width: fit-content;
  border: 1px solid rgb(100,100,100);
  border-radius: 5px;
  background-color: rgb(144, 249, 144);

  display: flex;
  align-items: center;
  justify-content: center;
  
  grid-column: ${(props) => props.positionX ? props.positionX : "auto"};
  grid-row: ${(props) => props.positionY ? props.positionY : "auto"};

  button {
    margin: 5px 5px;
    padding: 0;
    height: 4rem;
    width: 4rem;
    color: rgb(100,100,100);
    background-color: #70f970;
    font-size: 2rem;
    border: none;
    border-radius: 5px;
  }

  button:hover {
    background-color: rgb(128, 249, 128);
    border-radius: 20px;
  }
`;
