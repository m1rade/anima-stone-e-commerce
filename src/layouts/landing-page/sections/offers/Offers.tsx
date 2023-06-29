import React from "react";
import styled from "styled-components";
import cardPicture from "../../../../assets/img/card.jpg";
import { ProductCard } from "../../../../components/product-card/ProductCard";
import { FlexContainer } from "../../../../components/styled/FlexContainer";
import { Section } from "../../../../components/styled/Section";
import { Title } from "../../../../components/title/Title";
import { ProductType } from "../../../../constants/products";
import { LinkButton } from "../../../../components/styled/buttons/LinkButton";
// import bgImage from "../../../../assets/img/catalogue-3.jpg"

type PropsType = {
    products: ProductType[];
};

export const Offers: React.FC<PropsType> = ({ products }) => {
    return (
        <Section style={{ backgroundColor: "#00707b" }}>
            <FlexContainer justifyContent="flex-start" alignItems="center" wrap="wrap">
                <OfferContainer>
                    <Title name="Актуальные акции на " coloredSegment="нашу продукцию" color="#fff" />
                    <p>
                        Учитывая ключевые сценарии поведения, обучения кадров влечет за собой процесс внедрения и
                        модернизации распределения
                    </p>
                    <LinkButton href="#" linkStyle="primary">Перейти в каталог</LinkButton>
                </OfferContainer>
                <LinkButton linkStyle="options" href="#">Смотреть всё</LinkButton>
                {products.map((p, i) => {
                    return (
                        <ProductCard
                            key={i}
                            image={cardPicture}
                            name={p.name}
                            category={p.category}
                            price={p.price}
                            salesPrice={i % 2 ? p.salesPrice : ""}
                        />
                    );
                })}
            </FlexContainer>
        </Section>
    );
};

const OfferContainer = styled.div`
    width: 50%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.87) 0%, rgba(0, 0, 0, 0.24) 100%);
    align-self: center;

    p {
        color: #fff;
        font-size: 22px;
    }
`;
