import styled, { Interpolation } from "styled-components";

type Props = {
    src: string;
    styles?: Interpolation<React.CSSProperties>;
};

export const Logo: React.FC<Props> = ({src, styles}) => {
    return (
        <StyledLogo href="#" styles={styles}>
            <img src={src} alt="anima-logo" />
        </StyledLogo>
    );
};

const StyledLogo = styled.a<Omit<Props, "src">>`
    ${props => props.styles}
    img {
        width: 100%;
        height: 100%;
    }
`