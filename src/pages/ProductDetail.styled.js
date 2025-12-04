// src/pages/ProductDetail.styled.js
import styled from "styled-components";

export const DetailWrapper = styled.div`
  max-width: 960px;
  margin: 40px auto 80px;
  padding: 0 40px;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageBox = styled.div`
  width: 360px;
  height: 280px;
  border-radius: 14px;
  overflow: hidden;
  background-color: #f5f5f5;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoBox = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #222;
  margin-bottom: 10px;
`;

export const MetaRow = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 14px;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const Tag = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  background-color: #f3f3ff;
  color: #5b3cc4;
  font-size: 12px;
  font-weight: 600;
`;

export const ButtonRow = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: #00c471;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #00a860;
  }
`;

export const EmptyText = styled.p`
  margin-top: 40px;
  text-align: center;
  color: #888;
  font-size: 15px;
`;
