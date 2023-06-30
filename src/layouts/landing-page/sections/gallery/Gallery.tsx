import styled from "styled-components";
import insp2 from "../../../../assets/img/insp-2.png";
import insp3 from "../../../../assets/img/insp-3.webp";
import insp4 from "../../../../assets/img/insp-4.webp";
import insp5 from "../../../../assets/img/insp-5.webp";
import insp1 from "../../../../assets/img/stones.webp";
import { ArrowButtons } from "../../../../components/arrow-buttons/ArrowButtons";
import { Title } from "../../../../components/title/Title";
import { LinkButton } from "../../../../components/styled/buttons/LinkButton";
import { Slider } from "../../../../components/slider/Slider";

export const Gallery = () => {
    return (
        <GallerySection>
            <Title name="Идеи для " coloredSegment="вдохновения" />
            <ArrowButtons />
            <Slider>
                <PictureContainer>
                    <Picture src={insp1} alt="inspiration-ideas" />
                    <Picture src={insp2} alt="inspiration-ideas" />
                    <Picture src={insp3} alt="inspiration-ideas" />
                    <Picture src={insp4} alt="inspiration-ideas" />
                    <Picture src={insp5} alt="inspiration-ideas" />
                </PictureContainer>
            </Slider>
            <StyledLinkButton href="#" linkStyle="primary">
                Смотреть еще больше фотографий
            </StyledLinkButton>
        </GallerySection>
    );
};

const GallerySection = styled.section`
    background-color: #79b8a1;
`;

const Picture = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const PictureContainer = styled.div`
    display: grid;
    grid-template-columns: 500px repeat(2, 350px);
    grid-template-rows: repeat(2, 370px);
    grid-gap: 20px;

    ${Picture}:first-child {
        grid-row: 1 / 3;
    }
`;

const StyledLinkButton = styled(LinkButton)`
    font-size: 18px;
    font-weight: 400;
`;
