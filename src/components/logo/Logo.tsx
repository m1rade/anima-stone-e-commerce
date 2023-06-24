import styled from "styled-components";
import logo from "../../assets/img/logo.png";

export const Logo = () => {
    return (
        <StyledLogo href="#">
            <img src={logo} alt="anima-logo" />
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    
`