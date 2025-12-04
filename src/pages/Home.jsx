// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
// import { PRODUCTS } from "../data/product";  
import { HomeContainer } from "./Home.styled"; 

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  // ✅ 컴포넌트 마운트될 때 localStorage에서 상품 목록 불러오기
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    // createdAt 기준 최신순 정렬
    const sorted = [...stored].sort((a, b) => b.createdAt - a.createdAt);
    setProducts(sorted);
  }, []);

  // 검색 필터
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <HomeContainer>
      <SearchBar keyword={keyword} onChange={setKeyword} />
      <ProductList products={filtered} />
    </HomeContainer>
  );
};

export default Home;
