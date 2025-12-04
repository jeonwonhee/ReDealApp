import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  LoginCard,
  Title,
  InputBox,
  LoginButton,
  Row,
  StyledLink
} from "./Login.styled";

const Login = ({ onLogin }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !pw) {
      alert("아이디와 비밀번호를 모두 입력해주세요");
      return;
    }

    // 🔹 1) 로컬스토리지에서 회원 목록 가져오기
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔹 2) 아이디로 회원 찾기
    const found = users.find((user) => user.id === id);

    if (!found) {
      alert("존재하지 않는 아이디입니다. 회원가입을 먼저 진행해주세요.");
      return;
    }

    // 🔹 3) 비밀번호 비교
    if (found.pw !== pw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 🔹 4) 로그인 성공 처리 (상태 + 로컬스토리지)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(found));

    if (onLogin) {
      onLogin(found.id); // 헤더에서 표시용
    }

    alert("로그인 되었습니다.");
    navigate("/");
  };

  return (
    <PageWrapper>
      <LoginCard>
        <Title>ReDeal</Title>
        <form onSubmit={handleSubmit}>
          <InputBox
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <InputBox
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />

          <Row>
            <StyledLink to="/signup">회원가입</StyledLink>
            <StyledLink to="/findpw">비밀번호 찾기</StyledLink>
          </Row>

          {/* ⛔ onClick 비우지 말고, 그냥 submit 버튼만 두기 */}
          <LoginButton type="submit">로그인</LoginButton>
        </form>
      </LoginCard>
    </PageWrapper>
  );
};

export default Login;
