// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import { HomeContainer } from "./Home.styled";

const Home = ({ isLoggedIn, onLogout, currentUser }) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  // 마운트될 때 localStorage에서 상품 불러오기 (최신순)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products") || "[]");
    const sorted = [...stored].sort((a, b) => b.createdAt - a.createdAt);
    setProducts(sorted);
  }, []);

  // 검색 필터 (제목/카테고리에 키워드 포함)
  const filtered = products.filter((p) => {
    if (!keyword.trim()) return true;
    const k = keyword.toLowerCase();

    return (
      (p.title && p.title.toLowerCase().includes(k)) ||
      (p.category && p.category.toLowerCase().includes(k))
    );
  });

  return (
    <>
      {/* 상단 공통 헤더 */}
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />

      {/* 메인 영역 */}
      <HomeContainer>
        <SearchBar keyword={keyword} onChange={setKeyword} />
        <ProductList products={filtered} />
      </HomeContainer>
    </>
  );
};

export default Home;
