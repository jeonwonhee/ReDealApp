// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  DetailWrapper,
  TopSection,
  ImageBox,
  InfoBox,
  Title,
  Price,
  MetaRow,
  TagRow,
  Tag,
  ButtonRow,
  BackButton,
  EmptyText,
} from "./ProductDetail.styled";

const ProductDetail = ({ isLoggedIn, onLogout }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 판매글들 로컬스토리지에서 가져오기
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products.find((p) => String(p.id) === id);

  // 상품이 없을 때
  if (!product) {
    return (
      <>
        <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
        <DetailWrapper>
          <EmptyText>상품을 찾을 수 없습니다.</EmptyText>
          <ButtonRow>
            <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
          </ButtonRow>
        </DetailWrapper>
      </>
    );
  }

  // title / name 둘 다 대응 (Sell에서 저장한 건 title)
  const displayTitle = product.title || product.name;
  const createdAtText = product.createdAt
    ? new Date(product.createdAt).toLocaleString("ko-KR")
    : "";

  const shippingText =
    product.shippingType === "include"
      ? "배송비 포함"
      : product.shippingType === "exclude"
      ? "배송비 별도"
      : "배송 정보 없음";

  const directDealText =
    product.directDeal === "yes"
      ? "직거래 가능"
      : product.directDeal === "no"
      ? "직거래 불가"
      : "직거래 정보 없음";

  return (
    <>

      <DetailWrapper>
        <TopSection>
          <ImageBox>
            {product.image ? (
              <img src={product.image} alt={displayTitle} />
            ) : (
              <span>이미지가 없습니다.</span>
            )}
          </ImageBox>

          <InfoBox>
            <Title>{displayTitle}</Title>

            {product.price != null && (
              <Price>{product.price.toLocaleString()}원</Price>
            )}

            <MetaRow>
              {product.category && <span>{product.category}</span>}
              {createdAtText && <span> · {createdAtText}</span>}
            </MetaRow>

            <TagRow>
              <Tag>{shippingText}</Tag>
              <Tag>{directDealText}</Tag>
              {product.allowOffer && <Tag>가격 제안 가능</Tag>}
            </TagRow>
          </InfoBox>
        </TopSection>

        <ButtonRow>
          <BackButton onClick={() => navigate(-1)}>목록으로</BackButton>
        </ButtonRow>
      </DetailWrapper>
    </>
  );
};

export default ProductDetail;
