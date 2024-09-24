import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 0;
  width: fit-content;
  border: 1px solid rgb(100,100,100);
  border-radius: 5px;
  background-color: #90f990;

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
    background-color: #70f970;
    border: none;
    border-radius: 5px;
  }

  button:hover {
    background-color: #80f980;
    border-radius: 20px;
  }
`;
