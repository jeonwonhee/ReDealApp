// src/components/ProductItem.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ItemWrapper = styled.li`
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid #eee;
  border-radius: 12px;
  list-style: none;
  background-color: #ffffff;
  cursor: pointer;
  transition: box-shadow 0.12s ease, transform 0.12s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.06);
    transform: translateY(-2px);
  }
`;

const Thumb = styled.div`
  width: 120px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;
`;

const Meta = styled.div`
  font-size: 13px;
  color: #777;
  margin-bottom: 4px;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #222;
`;

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  // Sell.jsx에서 저장한 건 title, 옛날 더미데이터는 name이라 둘 다 대응
  const displayTitle = product.title || product.name;

  if (!displayTitle) return null;

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <ItemWrapper onClick={handleClick}>
      {product.image && (
        <Thumb>
          <img src={product.image} alt={displayTitle} />
        </Thumb>
      )}

      <Info>
        <Title>{displayTitle}</Title>
        {product.category && (
          <Meta>{product.category}</Meta>
        )}
        {typeof product.price === 'number' && !Number.isNaN(product.price) && (
          <Price>{product.price.toLocaleString()}원</Price>
        )}
      </Info>
    </ItemWrapper>
  );
};

export default ProductItem;
