import React from "react";
import styled from "styled-components";
import { FlexContainer } from "../styled/FlexContainer";

type Props = {
    children: React.ReactNode;
};

export const Slider: React.FC<Props> = ({ children }) => {
    return (
        <FlexContainer direction="column" justifyContent="center" alignItems="center" wrap="wrap">
            {children}
            <SliderPagination>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </SliderPagination>
        </FlexContainer>
    );
};

const SliderPagination = styled.div`
    span {
        display: inline-block;
        width: 30px;
        height: 3px;
        background: #b3b7bc;
    }

    span + span {
        margin-left: 12px;
    }
`;
