// src/pages/MyShop.jsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // ✅ 경로 수정

import {
  PageWrapper,
  ProfileCard,
  ProfileTop,
  AvatarWrapper,
  AvatarCircle,
  AvatarImage,
  AvatarButton,
  ProfileInfo,
  NameInput,
  IntroTextarea,
  SaveButton,
  SectionTitle,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductMeta,
  EmptyText,
} from "./MyShop.styled";

const MyShop = ({ currentUser, isLoggedIn, onLogout }) => {
  const [profileName, setProfileName] = useState("");
  const [intro, setIntro] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [myProducts, setMyProducts] = useState([]);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let user = currentUser;
    if (!user) {
      user = JSON.parse(localStorage.getItem("currentUser") || "null");
    }

    if (!user) {
      alert("로그인 정보가 없습니다. 다시 로그인해 주세요.");
      navigate("/login");
      return;
    }

    // 상점 프로필 로드
    const savedProfile = JSON.parse(
      localStorage.getItem(`shopProfile_${user.id}`) || "null"
    );

    if (savedProfile) {
      setProfileName(savedProfile.name || "");
      setIntro(savedProfile.intro || "");
      setProfileImage(savedProfile.image || null);
    } else {
      setProfileName(user.name || user.id || "");
    }

    // ✅ 내 상품 목록 로드
    const allProducts = JSON.parse(localStorage.getItem("products") || "[]");
    const mine = allProducts
      .filter((p) => p.sellerId === user.id) // 내가 올린 글만
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

    setMyProducts(mine);
  }, [currentUser, navigate]);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProfile = () => {
    let user = currentUser;
    if (!user) {
      user = JSON.parse(localStorage.getItem("currentUser") || "null");
    }

    if (!user) {
      alert("로그인 정보가 없습니다.");
      navigate("/login");
      return;
    }

    const profile = {
      name: profileName,
      intro,
      image: profileImage,
    };

    localStorage.setItem(`shopProfile_${user.id}`, JSON.stringify(profile));
    alert("상점 프로필이 저장되었습니다.");
  };

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      {/* 상단 공통 헤더 */}
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />

      <PageWrapper>
        {/* 상점 프로필 카드 */}
        <ProfileCard>
          <ProfileTop>
            <AvatarWrapper>
              {profileImage ? (
                <AvatarImage src={profileImage} alt="프로필" />
              ) : (
                <AvatarCircle>
                  {profileName ? profileName.charAt(0) : "?"}
                </AvatarCircle>
              )}
              <AvatarButton type="button" onClick={handleAvatarClick}>
                프로필 사진 선택
              </AvatarButton>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
            </AvatarWrapper>

            <ProfileInfo>
              <NameInput
                placeholder="상점 이름을 입력하세요"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
              />
              <IntroTextarea
                placeholder="상점 소개를 입력해 주세요. (예: 친절하고 빠르게 거래해요!)"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
              />
              <SaveButton type="button" onClick={handleSaveProfile}>
                상점 프로필 저장
              </SaveButton>
            </ProfileInfo>
          </ProfileTop>
        </ProfileCard>

        {/* 내가 올린 상품 목록 */}
        <SectionTitle>내가 올린 상품</SectionTitle>

        {myProducts.length === 0 ? (
          <EmptyText>아직 등록한 상품이 없습니다.</EmptyText>
        ) : (
          <ProductGrid>
            {myProducts.map((p) => (
              <ProductCard key={p.id} onClick={() => handleProductClick(p.id)}>
                {p.image ? (
                  <ProductImage src={p.image} alt={p.title} />
                ) : (
                  <ProductImage
                    as="div"
                    style={{
                      backgroundColor: "#f3f3f3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    이미지 없음
                  </ProductImage>
                )}
                <ProductTitle>{p.title}</ProductTitle>
                <ProductMeta>
                  {p.price != null
                    ? `${p.price.toLocaleString()}원`
                    : "가격 미정"}
                </ProductMeta>
              </ProductCard>
            ))}
          </ProductGrid>
        )}
      </PageWrapper>
    </>
  );
};

export default MyShop;
