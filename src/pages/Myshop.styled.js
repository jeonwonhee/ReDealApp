// src/pages/MyShop.styled.js
import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1100px;
  margin: 32px auto 80px;
  padding: 0 40px;
`;

export const ProfileCard = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
`;

export const ProfileTop = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const AvatarCircle = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #ece8e1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  color: #777;
`;

export const AvatarImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarButton = styled.button`
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid #ddd;
  background-color: #fff;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    border-color: #00c471;
    color: #00c471;
  }
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const NameInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 600;

  &:focus {
    outline: none;
    border-color: #00c471;
  }
`;

export const IntroTextarea = styled.textarea`
  width: 100%;
  min-height: 70px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px 12px;
  font-size: 14px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00c471;
  }
`;

export const SaveButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 999px;
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

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ProductCard = styled.div`
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transform: translateY(-1px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const ProductTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #222;
`;

export const ProductMeta = styled.div`
  font-size: 13px;
  color: #666;
`;

export const EmptyText = styled.p`
  margin-top: 12px;
  color: #888;
  font-size: 14px;
`;
