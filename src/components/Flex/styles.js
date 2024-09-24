import styled from "styled-components";

export const FlexContainer = styled.div`
    margin: 0px;
    padding: 0px;

    height: ${(props) => props.column ? "100%" : "fit-content"};
    width: ${(props) => props.column ? "fit-content" : "100%"};
    border: none;
    border-radius: 5px;

    display: flex;
    flex-direction: ${(props) => props.column ? "column" : "row"};
    
    grid-column: ${(props) => props.column ? "4 / span 1" : "1 / span 2"};
    grid-row: ${(props) => props.column ? "1 / span 5" : "1 / span 1"};
`