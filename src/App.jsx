// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sell from "./pages/Sell";
import MyPage from "./pages/MyPage";
import MyShop from "./pages/MyShop";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

// 로그인 필요한 페이지 보호용
const PrivateRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    alert("로그인 후 이용 가능합니다.");
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => {
  // localStorage에 저장된 로그인 사용자 읽어오기
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  const isLoggedIn = !!currentUser;

  // Login 컴포넌트에서 성공 시 호출
  const handleLogin = () => {
    const saved = localStorage.getItem("currentUser");
    if (saved) {
      setCurrentUser(JSON.parse(saved));
    } else {
      // 혹시 모를 안전 장치
      setCurrentUser({ id: "temp" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    setCurrentUser(null);
  };

  return (
    <>
      {/* ✅ 모든 페이지에서 공통으로 보이는 헤더 */}
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {/* ✅ 페이지별 내용은 여기서 바뀜 */}
      <Routes>
        {/* 홈 (누구나 접근 가능) */}
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              currentUser={currentUser}
            />
          }
        />

        {/* 상세페이지 (누구나 접근 가능) */}
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              currentUser={currentUser}
            />
          }
        />

        {/* 로그인 / 회원가입은 공개 */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        {/* 로그인 필요한 페이지들 */}
        <Route
          path="/sellpage"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Sell isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            </PrivateRoute>
          }
        />

        <Route
          path="/myshop"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <MyShop isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            </PrivateRoute>
          }
        />

        <Route
          path="/mypage"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <MyPage isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            </PrivateRoute>
          }
        />

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
