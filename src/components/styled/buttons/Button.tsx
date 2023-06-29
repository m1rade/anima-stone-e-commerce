import styled, { css } from "styled-components";

type Props = {
    btnStyle: "primary" | "send";
};

export const Button = styled.button<Props>`
    padding: 15px 60px;

    cursor: pointer;
    border: none;

    &:hover {
        box-shadow: 0px 0px 47px 3px rgba(0, 0, 0, 0.1);
    }

    ${props =>
        props.btnStyle === "primary" &&
        css<Props>`
            background-color: #28553f;
            color: #fff;
        `}

    ${props =>
        props.btnStyle === "send" &&
        css<Props>`
            background-color: #fff;
            color: #28553f;
            border: 1px solid #cacaca;
        `}
`;
