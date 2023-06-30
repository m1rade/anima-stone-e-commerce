import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../icon/Icon";

type Props = {};

export const ArrowButtons: React.FC<Props> = () => {
    return (
        <>
            <ArrowBtn>
                <Icon iconId="left-arrow" width="16" height="16" viewBox="0 0 16 16" />
            </ArrowBtn>
            <ArrowBtn active>
                <Icon iconId="right-arrow" width="16" height="16" viewBox="0 0 16 16" />
            </ArrowBtn>
        </>
    );
};

type ArrowBtnPropsType = {
    active?: boolean;
};

const ArrowBtn = styled.button<ArrowBtnPropsType>`
    width: 47px;
    height: 47px;
    color: white;
    background-color: transparent;
    border: 0.5px solid #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    ${props =>
        props.active &&
        css`
            background-color: #28553f;
            border-color: #28553f;
        `}
`;
