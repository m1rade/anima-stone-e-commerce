import styled from "styled-components";
import c1 from "../../../../assets/img/catalogue-1.webp";
import c2 from "../../../../assets/img/catalogue-2.webp";
import c3 from "../../../../assets/img/catalogue-3.jpg";
import c4 from "../../../../assets/img/catalogue-4.webp";
import { ArrowButtons } from "../../../../components/arrow-buttons/ArrowButtons";
import { LinkButton } from "../../../../components/styled/buttons/LinkButton";
import { Title } from "../../../../components/title/Title";

export const Catalogue = () => {
    return (
        <CatalogueSection>
            <Title>Изделия из натурального камня</Title>
            <ArrowButtons />
            <LinkButton href="#" linkStyle="options">
                Смотреть всё
            </LinkButton>
            <GridContainer>
                <a href="#">
                    <img src={c1} alt="столешницы" />
                    столешницы
                </a>
                <a href="#">
                    <img src={c2} alt="подоконники" />
                    подоконники
                </a>
                <a href="#">
                    <img src={c3} alt="раковины" />
                    раковины
                </a>
                <a href="#">
                    <img src={c4} alt="панно" />
                    панно
                </a>
            </GridContainer>
        </CatalogueSection>
    );
};

const CatalogueSection = styled.section`
    background-color: #929292;
`;

const GridContainer = styled.div`
    img {
        width: 492px;
        height: 341px;
    }
`;
