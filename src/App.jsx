import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyPage from './pages/MyPage';
import MyShop from './pages/MyShop';
import FindPw from "./pages/FindPw";
import NotFound from './pages/NotFound';
import Sell from './pages/Sell';

// ✅ 여기! PrivateRoute 정의가 꼭 있어야 함
const PrivateRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const handleLogin = (id) => {
    setIsLoggedIn(true);
    setUserId(id);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId('');
  };

  return (
    <Routes>
      {/* 헤더가 있는 레이아웃 영역 */}
      <Route
        element={
          <Layout
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        }
      >
        {/* 홈(검색 페이지) - 로그인 필요 */}
        <Route
          path="/"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Home />
            </PrivateRoute>
          }
        />

        {/* 마이페이지 - 로그인 필요 */}
        <Route
          path="/mypage"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <MyPage userId={userId} />
            </PrivateRoute>
          }
        />

        {/* 내 상점 - 로그인 필요 */}
        <Route
          path="/myshop"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <MyShop />
            </PrivateRoute>
          }
        />
      </Route>

      {/* 로그인 / 회원가입은 헤더 없이 단독 노출 */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/findpw" element={<FindPw />} />
      <Route path='/sellpage' element={<Sell />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
};

export default App;
