import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../icon/Icon";

type Props = {};

export const ArrowButtons: React.FC<Props> = () => {
    return (
        <ArrowBtnContainer>
            <ArrowBtnLeft>
                <Icon iconId="left-arrow" width="16" height="16" viewBox="0 0 16 16" />
            </ArrowBtnLeft>
            <ArrowBtnRight active>
                <Icon iconId="right-arrow" width="16" height="16" viewBox="0 0 16 16" />
            </ArrowBtnRight>
        </ArrowBtnContainer>
    );
};

type ArrowBtnPropsType = {
    active?: boolean;
};

const ArrowBtnContainer = styled.div`
    display: flex;
`

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

const ArrowBtnLeft = styled(ArrowBtn)``;
const ArrowBtnRight = styled(ArrowBtn)``;