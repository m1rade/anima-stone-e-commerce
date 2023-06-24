import styled from "styled-components";

type SectionPropsType = {
    minHeight: string
    bg?: string
}

export const Section = styled.section<SectionPropsType>`
    min-height: ${props => props.minHeight};
`;