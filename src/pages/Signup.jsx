import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SignUpContainer,
  SignUpBox,
  Title,
  InputBox,
  SignUpButton,
  CheckButton,
  IdRow,
  IdInputBox
} from './Signup.styled';

const Signup = () => {
  const [id, setId] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [idMsg, setIdMsg] = useState('');

  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [pwCheckMsg, setPwCheckMsg] = useState('');

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  // 아이디 중복확인
  const handleCheckId = () => {
    if (!id.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((user) => user.id === id);

    if (exists) {
      setIdMsg("이미 사용 중인 아이디입니다.");
      setIsIdChecked(false);
    } else {
      setIdMsg("사용 가능한 아이디입니다.");
      setIsIdChecked(true);
    }
  };

  // 비밀번호 확인 체크
  const handleConfirmPwChange = (value) => {
    setConfirmPw(value);

    if (!pw || !value) {
      setPwCheckMsg('');
      return;
    }

    if (pw === value) {
      setPwCheckMsg('비밀번호가 일치합니다.');
    } else {
      setPwCheckMsg('비밀번호가 일치하지 않습니다.');
    }
  };

  // 회원가입 완료 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !name || !pw || !confirmPw || !phone || !email) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (!isIdChecked) {
      alert("아이디 중복확인을 해주세요!");
      return;
    }

    if (pw !== confirmPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { id, pw, name, phone, email, gender };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    alert("회원가입이 완료되었습니다. 로그인해주세요.");
    navigate("/login");
  };

  return (
    <SignUpContainer>
      <SignUpBox>
        <Title>회원가입</Title>

        <form onSubmit={handleSubmit}>
          <InputBox
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        <IdRow>
            <IdInputBox
                placeholder="아이디"
                value={id}
                onChange={(e) => {
                setId(e.target.value);
                setIsIdChecked(false);
                setIdMsg("");
                }}
            />
            <CheckButton type="button" onClick={handleCheckId}>
                중복확인
            </CheckButton>
        </IdRow>

          {idMsg && (
            <p style={{ marginTop: "6px", fontSize: "13px", color: isIdChecked ? "#00a860" : "red" }}>
              {idMsg}
            </p>
          )}

          <InputBox
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <InputBox
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPw}
            onChange={(e) => handleConfirmPwChange(e.target.value)}
          />

          {pwCheckMsg && (
            <p style={{ marginTop: "6px", fontSize: "13px", color: pw === confirmPw ? "#00a860" : "red" }}>
              {pwCheckMsg}
            </p>
          )}

          <InputBox
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputBox
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <SignUpButton type="submit">회원가입</SignUpButton>
        </form>
      </SignUpBox>
    </SignUpContainer>
  );
};

export default Signup;


