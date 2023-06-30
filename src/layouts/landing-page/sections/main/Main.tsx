import styled from "styled-components";
import landingImg from "../../../../assets/img/stones.webp";
import { ArrowButtons } from "../../../../components/arrow-buttons/ArrowButtons";
import { Button } from "../../../../components/styled/buttons/Button";
import { LinkButton } from "../../../../components/styled/buttons/LinkButton";
// import bgImage from "../../../assets/img/bg-main.jpg"

export const Main = () => {
    return (
        <MainSection>
            <GridContainer>
                <LandingInfo>
                    <span>камень с душой</span>
                    <h1>
                        Каменные изделия <span>для вашего дома</span>
                    </h1>
                    <LinkButton href="#" linkStyle="primary">
                        Рассчитать стоимость
                    </LinkButton>
                    <StyledButton btnStyle="send">Связаться с нами</StyledButton>
                </LandingInfo>
                <ArrowBtnsContainer>
                    <ArrowButtons />
                </ArrowBtnsContainer>
                <LandingImg src={landingImg} alt="interior-example" />
            </GridContainer>
        </MainSection>
    );
};

const MainSection = styled.section`
    background-color: #7c7c7c;
    padding-top: 20px;
    padding-bottom: 50px;

    min-height: calc(100vh - 150px);
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

        span {
            color: #28553f;
        }
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

const StyledButton = styled(Button)`
    text-transform: uppercase;
    font-size: 16px;
    color: #fff;
    background-color: #141414;
    border: none;
    margin-left: 23px;
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
