import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderInner,
  Logo,
  Menu,
  NavLink,
  MenuButton
} from './Header.styled';

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo to="/">ReDeal</Logo>

        {isLoggedIn && (
          <Menu>
            <NavLink to="/sellpage">판매하기</NavLink>
            <NavLink to="/mypage">마이페이지</NavLink>
            <NavLink to="/myshop">내 상점</NavLink>
            <MenuButton onClick={handleLogoutClick}>로그아웃</MenuButton>
          </Menu>
        )}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
