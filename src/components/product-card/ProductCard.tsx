import React from 'react'
import styled from 'styled-components';
import { ProductType } from '../../constants/products';

type Props = ProductType & {
    image: string
}

export const ProductCard: React.FC<Props> = ({image, name, category, price, salesPrice}) => {
  return (
      <StyledProductCard>
          <img src={image} alt="product" />
          {/* {discount && show discount} */}
          <h5>{category}</h5>
          <h3>{name}</h3>
          <Price>{salesPrice ? salesPrice : price} ₽</Price>
          {salesPrice && <OldPrice>{price} ₽</OldPrice>}
          <a href="#">Подробнее</a>
      </StyledProductCard>
  );
}

const StyledProductCard = styled.div`
    min-width: 282px;
`
const Price = styled.span`
    margin-right: 50px;
`

const OldPrice = styled.span`
    text-decoration: line-through;
`