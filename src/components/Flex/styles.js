import styled from "styled-components";

export const FlexContainer = styled.div`
    margin: 0px;
    padding: 0px;
    width: fit-content;
    min-width: 80px;
    height: ${(props) => props.column ? "100%" : "25%"};
    // height: fit-content;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    background-color: #90f990;

    display: flex;
    flex-direction: ${(props) => props.column ? "column" : "row"};
    flex-wrap: no-wrap;
    
    grid-column: ${(props) => props.column ? "4 / span 1" : "1 / span 2"};
    grid-row: ${(props) => props.column ? "1 / span 4" : "4 / span 1"};
`