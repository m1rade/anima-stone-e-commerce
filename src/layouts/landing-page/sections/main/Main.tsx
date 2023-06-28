import styled, { css } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Section } from "../../../../components/styled/Section";
import landingImg from "../../../../assets/img/stones.webp";
// import bgImage from "../../../assets/img/bg-main.jpg"

export const Main = () => {
    return (
        <MainSection minHeight="calc(100vh - 150px)">
            <GridContainer>
                <LandingInfo>
                    <span>камень с душой</span>
                    <h1>Каменные изделия для вашего дома</h1>
                    <button>Рассчитать стоимость</button>
                    <button>Связаться с нами</button>
                </LandingInfo>
                <ArrowBtnsContainer>
                    <ArrowBtn margin="7px">
                        <Icon iconId="left-arrow" width="16" height="16" viewBox="0 0 16 16" />
                    </ArrowBtn>
                    <ArrowBtn active>
                        <Icon iconId="right-arrow" width="16" height="16" viewBox="0 0 16 16" />
                    </ArrowBtn>
                </ArrowBtnsContainer>
                <LandingImg src={landingImg} alt="interior-example" />
            </GridContainer>
        </MainSection>
    );
};

const MainSection = styled(Section)`
    background-color: #7c7c7c;
    padding-top: 20px;
    padding-bottom: 50px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
`;

const LandingInfo = styled.div`
    justify-self: start;
    align-self: center;
    grid-area: 1/1;

    position: relative;
    z-index: 10;

    padding: 70px 40px 60px 100px;

    background: #000;
    color: #fff;
    box-shadow: 0px 0px 33px 9px rgba(255, 255, 255, 0.03);

    text-transform: uppercase;

    h1 {
        font-size: 50px;
    }
`;

const ArrowBtnsContainer = styled.div`
    grid-area: 1 / 1;
    align-self: end;
    justify-self: start;
    padding: 0 0 12.5% 19%;

    position: relative;
    z-index: 10;

    display: flex;

    button + button {
        margin-left: 7px;
    }
`;

type ArrowBtnPropsType = {
    margin?: string;
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
        css<ArrowBtnPropsType>`
            background-color: #28553f;
            border-color: #28553f;
        `}
`;

const LandingImg = styled.img`
    object-fit: cover;
    padding-bottom: 20px;

    width: 67em;

    position: relative;
    z-index: 1;

    grid-area: 1 / 1 / span 2 / span 2;
    justify-self: end;
`;
