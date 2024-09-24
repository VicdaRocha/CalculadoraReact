import styled from "styled-components";

export const GridContainer = styled.div`
    margin: 0px;
    padding: 0px;
    width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 5px;

    display: grid;
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    gap: 0px;
    align-items: center;
    justify-items: center;

    grid-column: 1 / span 3;
    grid-row: 2 / span 4;
`