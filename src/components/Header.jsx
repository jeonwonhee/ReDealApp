import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  HeaderInner,
  Logo,
  Menu,
  NavLink,
  AuthButton,
} from "./Header.styled";

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      onLogout();
      alert("로그아웃 되었습니다.");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleGoSell = () => navigate("/sellpage");
  const handleGoMyShop = () => navigate("/myshop");
  const handleGoMyPage = () => navigate("/mypage");

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo to="/">ReDeal</Logo>

        <Menu>
          <NavLink to="/sellpage">판매글 작성</NavLink>
          <NavLink to="/myshop">내 상점</NavLink>

          <AuthButton type="button" onClick={handleAuthClick}>
            {isLoggedIn ? "로그아웃" : "로그인"}
          </AuthButton>
        </Menu>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
