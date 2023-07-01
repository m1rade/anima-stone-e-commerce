import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;

    border: 1px solid red;

    @media screen and (max-width: 1280px) {
        padding: 0 20px;
    }
`