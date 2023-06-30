import React from "react";
import styled from "styled-components";
import { ProductType } from "../../constants/products";
import { LinkButton } from "../styled/buttons/LinkButton";

type Props = ProductType & {
    image: string;
};

export const ProductCard: React.FC<Props> = ({ image, name, category, price, salesPrice }) => {
    return (
        <StyledProductCard>
            <Picture src={image} alt="product" />
            {/* {discount && show discount} */}
            <Info>
                <Category>{category}</Category>
                <Name>{name}</Name>
                <Price>
                    <Current>{salesPrice ? salesPrice : price} ₽</Current>
                    {salesPrice && <Old>{price} ₽</Old>}
                </Price>
            </Info>
            <CardBtn href="#" linkStyle="primary">
                Подробнее
            </CardBtn>
        </StyledProductCard>
    );
};

const StyledProductCard = styled.div`
    width: 282px;
    display: flex;
    flex-direction: column;
    
    padding: 15px 18px;

    box-shadow: 0px 4px 47px -2px rgba(0, 0, 0, 0.25);
    border: 1px solid #fff;

    background-color: #fff;
`;

const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 25px;
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    padding: 0 12px;

    font-size: 20px;
    font-weight: 700;
`;

const Category = styled.span`
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;

    color: #28553f;
`;

const Name = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;

    margin-bottom: 15px;

    color: #000;
`;

const Price = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Current = styled.span`
    color: #28553f;
`;

const Old = styled.span`
    font-size: 14px;
    text-decoration: line-through;
    color: #949981;
`;

const CardBtn = styled(LinkButton)`
    font-size: 17px;
    padding: 10px 77px;
    margin-top: 20px;
`;
