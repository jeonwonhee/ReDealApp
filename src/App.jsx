// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sell from "./pages/Sell";
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

  
      <Routes>
        {/* ✅ 누구나 볼 수 있는 홈 (첫 화면) */}
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

        {/* ✅ 누구나 볼 수 있는 상세페이지 (작성자면 수정/삭제 가능) */}
        <Route
          path="/products/:id"
          element={<ProductDetail currentUser={currentUser} />}
        />

        {/* 로그인 / 회원가입은 공개 */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ 여기부터는 로그인 필요 (판매글 작성, 내 상점, 마이페이지) */}
        <Route
          path="/sellpage"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Sell
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
                currentUser={currentUser}
              />
            </PrivateRoute>
          }
        />

        <Route
        path="/myshop"
        element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <MyShop
            currentUser={currentUser}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        </PrivateRoute>
          }
        />

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

  );
};

export default App;
