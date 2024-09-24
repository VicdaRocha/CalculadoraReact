import styled from "styled-components";

export const GridContainer = styled.div`
    margin: 0px;
    padding: 0px;
    width: 30%;
    min-width: 250px;
    height: 70%;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    background-color: #90f990;

    display: grid;
    grid-template-rows: repeat(${(props) => props.rows || 3}, 1fr);
    grid-template-columns: repeat(${(props) => props.columns || 4}, 1fr);
    gap: 0px;
    align-items: center;
    justify-items: center;

    grid-column: 1 / span 3;
    grid-row: 1 / span 4;
`