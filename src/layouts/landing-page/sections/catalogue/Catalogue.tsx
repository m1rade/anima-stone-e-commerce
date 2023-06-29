import styled from "styled-components";
import c1 from "../../../../assets/img/catalogue-1.webp";
import c2 from "../../../../assets/img/catalogue-2.webp";
import c3 from "../../../../assets/img/catalogue-3.jpg";
import c4 from "../../../../assets/img/catalogue-4.webp";
import { Section } from "../../../../components/styled/Section";
import { Title } from "../../../../components/title/Title";
import { LinkButton } from "../../../../components/styled/buttons/LinkButton";

export const Catalogue = () => {
    return (
        <Section style={{ backgroundColor: "#929292" }}>
            <Title>Изделия из натурального камня</Title>
            <button>{"<"}</button>
            <button>{">"}</button>
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
        </Section>
    );
};

const GridContainer = styled.div`
    img {
        width: 492px;
        height: 341px;
    }
`;
