import styled from "styled-components";

type FlexContainerPropsType = {
    direction?: string
    justifyContent?: string
    alignItems?: string
    wrap?: string
    gap?: string
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-items: ${props => props.alignItems || "stretch" };
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap};
`