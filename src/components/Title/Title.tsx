import React from "react";
import styled from "styled-components";

type Props = {
    name?: string;
    children?: React.ReactNode;
    coloredSegment?: string;
    fontSize?: string;
    color?: string;
    secondColor?: string;
};

export const Title: React.FC<Props> = ({ name, children, coloredSegment, fontSize, color, secondColor }) => {
    return (
        <StyledTitle fontSize={fontSize} color={color}>
            {children ? children : name ? name : ""}
            {coloredSegment && <ColoredTitle secondColor={secondColor}>{coloredSegment}</ColoredTitle>}
        </StyledTitle>
    );
};

const StyledTitle = styled.h2<Omit<Props, "name" | "coloredSegment" | "children">>`
    font-size: ${props => props.fontSize || "40px"};
    font-weight: 500;
    text-transform: uppercase;

    color: ${props => props.color || "#000"};
`;

const ColoredTitle = styled.span<Pick<Props, "secondColor">>`
    color: ${props => props.secondColor || "#28553f"};
`;
