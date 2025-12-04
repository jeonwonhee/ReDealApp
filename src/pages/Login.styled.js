import styled from "styled-components";
import { Link } from "react-router-dom"; 

export const PageWrapper = styled.div`
  width: 100%;
  height: 120vh;
  margin : 0 auto;
  background-color: #ece8e1ff; /* 베이지 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  width: 400px;
  padding: 40px 32px;
  margin-bottom: 120px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
  color: #333;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 46px;
  margin-top: 12px;
  margin-right : 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 14px;
  font-size: 15px;
  &:focus {
    border-color: #00c471;
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 24px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 600;
  background-color: #00c471;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #00a860;
  }
`;

export const Row = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  color: #555;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;