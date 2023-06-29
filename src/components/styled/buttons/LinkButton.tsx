import styled, { css } from "styled-components";

type Props = {
    linkStyle: "primary" | "secondary" | "options";
};

export const LinkButton = styled.a<Props>`
    text-decoration: none;

    display: inline-block;
    line-height: 1.2;
    padding: 15px 60px;
    text-align: center;

    &:hover {
        box-shadow: 0px 0px 33px 9px rgba(255, 255, 255, 0.03);
    }

    ${props =>
        props.linkStyle === "primary" &&
        css<Props>`
            background-color: #28553f;
            color: #fff;
        `}

    ${props =>
        props.linkStyle === "secondary" &&
        css<Props>`
            background-color: #fff;
            color: #000;
        `}

    ${props =>
        props.linkStyle === "options" &&
        css<Props>`
            color: #282a30;
            font-size: 21px;
            font-weight: 300;
            text-transform: uppercase;
        `}
`;
