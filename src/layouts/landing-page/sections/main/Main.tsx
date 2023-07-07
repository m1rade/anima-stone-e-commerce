import styled from "styled-components";
import bgImage from "../../../../assets/img/bg-main.jpg";
import landingImg from "../../../../assets/img/stones.webp";
import { theme } from "../../../../styles/theme";
import { LandingInfoBlock } from "./landing-info/LandingInfo";

export const Main = () => {
    return (
        <MainSection>
            <Wrapper>
                <LandingInfoBlock />
                <LandingImgWrapper>
                    <LandingImg src={landingImg} alt="interior-example" />
                </LandingImgWrapper>
            </Wrapper>
        </MainSection>
    );
};

const MainSection = styled.section`
    padding: 20px 0 70px;
    margin-top: 130px;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.93) 0%, rgba(0, 0, 0, 0.8) 100%), url(${bgImage}),
        lightgray 50% / cover no-repeat;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    position: relative;
`;

const LandingImgWrapper = styled.div`
    width: 978px;
    height: 603px;

    position: relative;
    z-index: 9;

    &::before {
        content: "";
        width: 90%;
        height: 97%;
        border: 2px solid ${theme.colors.accent};

        position: absolute;
        left: -24px;
        top: 36px;
        z-index: -1;
    }
`;

const LandingImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
