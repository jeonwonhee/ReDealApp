import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.li`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px 16px;
  list-style: none;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 6px;
`;

const Meta = styled.div`
  font-size: 13px;
  color: #555;
`;

const ProductItem = ({ product }) => {
  return (
    <ItemWrapper>
      <Title>{product.name}</Title>
      <Meta>{product.category} · {product.price.toLocaleString()}원</Meta>
    </ItemWrapper>
  );
};

export default ProductItem;
