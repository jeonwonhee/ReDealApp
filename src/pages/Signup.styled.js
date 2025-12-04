import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  height: 120vh;
  margin: 0 auto;
  background-color: #ece8e1ff; /* 베이지 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpBox = styled.div`
  width: 430px;
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
  width: 90%;
  height: 46px;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 14px;
  font-size: 15px;
  display: block;

  &:focus {
    border-color: #1b8c6a;
    outline: none;
  }
`;

/* ✅ 회원가입 버튼도 인풋이랑 폭 맞추고 색 살짝 톤다운 */
export const SignUpButton = styled.button`
  width: 90%;
  height: 50px;
  margin: 24px auto 0;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 600;
  background-color: #1b8c6a;   /* 더 차분한 그린 */
  color: #ffffff;
  cursor: pointer;
  display: block;

  &:hover {
    background-color: #157356;
  }
`;

export const IdRow = styled.div`
  width: 97%;
  margin: 12px auto 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const IdInputBox = styled.input`
  flex: 1;             
  height: 46px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 14px;
  font-size: 15px;
`;

export const CheckButton = styled.button`
  width: 110px;         
  height: 46px;
  background-color: #00c471;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background-color: #00a860;
  }
`;
