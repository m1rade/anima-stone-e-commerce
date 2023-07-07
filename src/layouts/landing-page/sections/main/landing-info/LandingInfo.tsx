import styled from "styled-components";
import { Button } from "../../../../../components/styled/buttons/Button";
import { theme } from "../../../../../styles/theme";

export const LandingInfoBlock = () => {
    return (
        <LandingInfo>
            <LandingSmallText>камень с душой</LandingSmallText>
            <LandingHeader>
                Каменные изделия <span>для вашего дома</span>
            </LandingHeader>
            <StyledButton as="a" href="#" btnStyle="primary">
                Рассчитать стоимость
            </StyledButton>
            <LinkButton as="a" href="#contact-us" btnStyle="send">
                Связаться с нами
            </LinkButton>
        </LandingInfo>
    );
};

const LandingInfo = styled.div`
    position: absolute;
    left: 0;
    right: 50%;
    top: 15%;
    z-index: 10;

    padding: 60px 40px 60px 100px;

    background: ${theme.colors.secondaryBg};
    color: ${theme.colors.fontLight};
    box-shadow: 0px 0px 33px 9px rgba(255, 255, 255, 0.03);

    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
`;

const LandingSmallText = styled.span`
    font-size: 14px;
    font-weight: inherit;
    color: ${theme.colors.fontSecondary};
    opacity: 0.8;

    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -75%;
        z-index: 11;
        display: inline-block;
        width: 82px;
        height: 0.5px;
        background: ${theme.colors.fontSecondary};
        opacity: 0.5;
    }
`;

const LandingHeader = styled.h1`
    font-size: 50px;
    font-weight: inherit;

    margin: 10px 0 25px;

    span {
        color: #28553f;
    }
`;

const StyledButton = styled(Button)`
    padding: 25px 40px;
    display: inline-block;

    font-size: inherit;
    font-weight: inherit;
`;

const LinkButton = styled(StyledButton)`
    background-color: #141414;
    color: ${theme.colors.fontLight};
    border: none;

    margin-left: 23px;
`;
