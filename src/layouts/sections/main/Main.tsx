import styled from "styled-components";
import landingImg from "../../../assets/img/stones.jpg";
import { FlexContainer } from "../../../components/styled/FlexContainer";
import { Section } from "../../../components/styled/Section.styled";
import bgImage from "../../../assets/img/bg-main.jpg"

export const Main = () => {
    return (
        <MainSection minHeight="100vh">
            <SuperFlexContainer justifyContent="flex-start">
                <LandingInfo image={bgImage}>
                    <span>камень с душой</span>
                    <h1>Каменные изделия для вашего дома</h1>
                    <button>Рассчитать стоимость</button>
                    <button>Связаться с нами</button>
                </LandingInfo>
                <LandingImg src={landingImg} alt="interior-example" />
            </SuperFlexContainer>
        </MainSection>
    );
};

const MainSection = styled(Section)`
    background-color: #7c7c7c;
    padding-top: 20px;
`
const SuperFlexContainer = styled(FlexContainer)`
    min-height: inherit;
    padding-bottom: 50px;
`;

const LandingInfo = styled.div<{image: string}>`
    align-self: center;
    flex-basis: 46em;

    padding: 70px 40px 60px 100px;

    background: #000;
    color: #fff;
    box-shadow: 0px 0px 33px 9px rgba(255, 255, 255, 0.03);

    position: relative;
    z-index: 10;

    h1 {
        font-size: 50px;
    }
`;

const LandingImg = styled.img`
    object-fit: cover;
    padding-bottom: 20px;
`;
