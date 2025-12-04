import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 18px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
`;

export const HeaderInner = styled.div`
  max-width: 1200px;         
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;  
  align-items: center;
`;

export const AuthButton = styled.button`
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background-color: #00c471;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #00a860;
  }
`;

export const Logo = styled(Link)`
  font-size: 26px;
  font-weight: 800;
  color: #00c471;
  text-decoration: none;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NavLink = styled(Link)`
  font-size: 15px;
    display: flex;
      align-items: center;
  font-weight: 500;
  color: #444;
  text-decoration: none;


  &:hover {
    color: #00c471;
  }
`;

export const MenuButton = styled.button`
  padding: 6px 14px;
  background-color: #00c471;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #00a860;
  }
`;
