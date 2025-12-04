import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 0;
`;

const EmptyText = styled.p`
  margin-top: 24px;
  text-align: center;
  color: #888;
`;

const ProductList = ({ products }) => {
  if (!products.length) {
    return <EmptyText>검색 결과가 없습니다.</EmptyText>;
  }

  return (
    <ListWrapper>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </ListWrapper>
  );
};

export default ProductList;
