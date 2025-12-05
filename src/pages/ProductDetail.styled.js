// src/pages/ProductDetail.styled.js
import styled from "styled-components";

export const DetailWrapper = styled.div`
  max-width: 960px;
  margin: 40px auto 60px;
  padding: 0 24px;
`;

export const DetailInner = styled.div`
  display: flex;
  gap: 32px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageArea = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 360px;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #eee;
`;

export const NoImage = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 10px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
  background-color: #fafafa;
`;

export const InfoArea = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #222;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #00c471;
  margin-bottom: 8px;
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 2px;
`;

/* ✅ 작은 카드(뱃지)들 */
export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

export const Tag = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid #eee;
  background-color: #f8f9fa;
  color: #555;
`;

export const Divider = styled.hr`
  margin: 16px 0;
  border: none;
  border-top: 1px solid #eee;
`;

export const BackButton = styled.button`
  margin-top: 24px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #ddd;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;
