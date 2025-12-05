// src/pages/Sell.jsx
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import {
  SellPageWrapper,
  Section,
  SectionHeader,
  SectionTitle,
  ImageArea,
  ImageBox,
  ImageHelpText,
  HiddenFileInput,
  FieldRow,
  FieldLabel,
  TitleInputWrapper,
  TextInput,
  TitleRight,
  CharCount,
  CategorySelect,
  PriceWrapper,
  PriceInput,
  PriceUnit,
  CheckboxRow,
  RadioRow,
  RadioGroup,
  RadioLabel,
  RadioInput,
  SectionDivider,
  ButtonRow,
  SecondaryButton,
  PrimaryButton,
  DescriptionInput, // ✅ 상품 설명 textarea
} from "./Sell.styled";

const MAX_TITLE = 40;

const MAIN_CATEGORY_OPTIONS = [
  "여성의류",
  "남성의류",
  "신발",
  "가방/지갑",
  "디지털기기",
  "생활가전",
  "가구/인테리어",
  "도서",
  "기타",
];

const Sell = ({ isLoggedIn, onLogout, currentUser }) => {
  const [title, setTitle] = useState("");
  const [mainCategory, setMainCategory] = useState("여성의류");
  const [price, setPrice] = useState("");
  const [allowOffer, setAllowOffer] = useState(true);
  const [shippingType, setShippingType] = useState("include");
  const [directDeal, setDirectDeal] = useState("no");
  const [images, setImages] = useState([]);
  const [mainImageDataUrl, setMainImageDataUrl] = useState(null);
  const [text, setText] = useState(""); // ✅ 상품 설명

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);

    const reader = new FileReader();
    reader.onloadend = () => {
      setMainImageDataUrl(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  // 상품명 글자 수 제한
  const handleTitleChange = (e) => {
    const value = e.target.value.slice(0, MAX_TITLE);
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ 로그인 유저 확인 (혹시 props에 없으면 localStorage에서라도)
    let user = currentUser;
    if (!user) {
      user = JSON.parse(localStorage.getItem("currentUser") || "null");
    }

    if (!user) {
      alert("로그인 정보가 없습니다. 다시 로그인해 주세요.");
      navigate("/login");
      return;
    }

    if (!title || !price) {
      alert("상품명과 가격은 필수입니다.");
      return;
    }

    // ✅ 새 상품 객체 생성 (작성자 정보 포함)
    const newProduct = {
      id: Date.now(),
      title,
      category: mainCategory,
      price: Number(price),
      allowOffer,
      shippingType,
      directDeal,
      image: mainImageDataUrl,
      description: text,
      createdAt: Date.now(),
      sellerId: user.id,                  // ⭐ 글쓴이 아이디
      sellerName: user.name || user.id,   // (선택) 글쓴이 이름
    };

    const existing = JSON.parse(localStorage.getItem("products")) || [];
    const updated = [newProduct, ...existing];

    localStorage.setItem("products", JSON.stringify(updated));

    alert("상품 등록이 완료되었습니다.");
    navigate("/");
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />

      <SellPageWrapper onSubmit={handleSubmit}>
        {/* 상품정보 섹션 */}
        <Section>
          <SectionHeader>
            <SectionTitle>상품정보</SectionTitle>
          </SectionHeader>

          {/* 이미지 영역 */}
          <ImageArea>
            <ImageBox onClick={handleImageBoxClick}>
              {!(images.length || mainImageDataUrl) ? (
                <>
                  <span role="img" aria-label="camera" style={{ fontSize: "32px" }}>
                    📷
                  </span>
                  <ImageHelpText>이미지 등록</ImageHelpText>
                </>
              ) : (
                <img
                  src={mainImageDataUrl || images[0].preview}
                  alt="상품 대표 이미지"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              )}
            </ImageBox>

            <HiddenFileInput
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </ImageArea>

          <SectionDivider />

          {/* 상품명 */}
          <FieldRow>
            <FieldLabel>상품명</FieldLabel>
            <TitleInputWrapper>
              <TextInput
                placeholder="상품명을 입력해 주세요."
                value={title}
                onChange={handleTitleChange}
              />
              <TitleRight>
                <CharCount>
                  {title.length}/{MAX_TITLE}
                </CharCount>
              </TitleRight>
            </TitleInputWrapper>
          </FieldRow>

          <SectionDivider />

          {/* 카테고리 */}
          <FieldRow>
            <FieldLabel>카테고리</FieldLabel>
            <CategorySelect
              value={mainCategory}
              onChange={(e) => setMainCategory(e.target.value)}
            >
              {MAIN_CATEGORY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </CategorySelect>
          </FieldRow>

          <SectionDivider />

          {/* ✅ 상품 설명 */}
          <FieldRow>
            <FieldLabel>상품 설명</FieldLabel>
            <DescriptionInput
              placeholder="상품 상태, 사용 기간, 하자 여부 등을 상세히 작성해 주세요."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FieldRow>
        </Section>

        {/* 가격 섹션 */}
        <Section>
          <SectionHeader>
            <SectionTitle>가격</SectionTitle>
          </SectionHeader>

          <FieldRow>
            <FieldLabel>가격</FieldLabel>
            <PriceWrapper>
              <PriceInput
                type="number"
                placeholder="가격을 입력해주세요."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <PriceUnit>원</PriceUnit>
            </PriceWrapper>
          </FieldRow>

          <CheckboxRow>
            <label>
              <input
                type="checkbox"
                checked={allowOffer}
                onChange={(e) => setAllowOffer(e.target.checked)}
              />
              가격제안 받기
            </label>
          </CheckboxRow>
        </Section>

        {/* 택배거래 섹션 */}
        <Section>
          <SectionHeader>
            <SectionTitle>택배거래</SectionTitle>
          </SectionHeader>

          <FieldRow>
            <FieldLabel>배송비</FieldLabel>
            <RadioRow>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="shipping"
                    value="include"
                    checked={shippingType === "include"}
                    onChange={(e) => setShippingType(e.target.value)}
                  />
                  배송비포함
                </RadioLabel>

                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="shipping"
                    value="exclude"
                    checked={shippingType === "exclude"}
                    onChange={(e) => setShippingType(e.target.value)}
                  />
                  배송비별도
                </RadioLabel>
              </RadioGroup>
            </RadioRow>
          </FieldRow>
        </Section>

        {/* 추가정보 섹션 */}
        <Section>
          <SectionHeader>
            <SectionTitle>추가정보</SectionTitle>
          </SectionHeader>

          <FieldRow>
            <FieldLabel>직거래</FieldLabel>
            <RadioRow>
              <RadioGroup>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="directDeal"
                    value="yes"
                    checked={directDeal === "yes"}
                    onChange={(e) => setDirectDeal(e.target.value)}
                  />
                  가능
                </RadioLabel>

                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="directDeal"
                    value="no"
                    checked={directDeal === "no"}
                    onChange={(e) => setDirectDeal(e.target.value)}
                  />
                  불가
                </RadioLabel>
              </RadioGroup>
            </RadioRow>
          </FieldRow>
        </Section>

        <ButtonRow>
          <PrimaryButton type="submit">등록하기</PrimaryButton>
        </ButtonRow>
      </SellPageWrapper>
    </>
  );
};

export default Sell;
