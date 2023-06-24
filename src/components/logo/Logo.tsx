import styled from "styled-components";
import logo from "../../assets/logo.png";

export const Logo = () => {
    return (
        <StyledLogo href="#">
            <img src={logo} alt="anima-logo" />
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    margin: 0px 20px -20px 0;
    img {
        height: 100%;
    }
`;