# 🚀 ReDeal – 중고거래 웹 애플리케이션
> React 기반 개인 중고거래 서비스 SPA

## 📘 개요 (Overview)
ReDeal은 React를 활용하여 구현한 중고거래 플랫폼 웹 애플리케이션으로,
로그인/회원가입 기능과 상품 등록, 상세페이지, 내 상점 관리 기능을 제공합니다.

로컬스토리지를 임시 데이터베이스처럼 활용하여 상품 데이터 및 회원 정보를 저장하고,
Router 기반의 SPA 방식으로 페이지 이동 없이 자연스러운 화면 전환을 제공합니다.

✔ 누구나 홈/상품 목록/상세페이지 조회 가능
✔ 로그인 시 판매글 작성 가능
✔ 마이페이지 및 내 상점 기능 제공 (프로필 편집 + 내가 등록한 상품 목록 조회)
✔ 상품 상세페이지에서 상품 이미지, 가격, 카테고리, 등록일 확인 가능
✔ 회원가입 시 비밀번호 확인 & 아이디 중복체크 기능 포함

## 🧱 기술 스택 (Tech Stack)
| 구분 | 사용 기술 |
|------|------------|
| Frontend | React, JavaScript, styled-components, React Router v6 |
| State | React Hooks (useState, useEffect, useNavigate, useParams)|
| Data| LocalStorage (회원정보 & 상품정보 저장) |
| Tools | Vite, VS Code, Git / GitHube |

## 🛠️ 설치 및 실행 (Installation & Run)
# 1. 프로젝트 클론
git clone https://github.com/username/project.git

# 2. 패키지 설
- npm install

# 3. 실행
- npm run dev

# 4. 웹 애플리케이션 실행
- 브라우저에서 접속
(http://localhost:5173/)

## 📂 프로젝트 구조 (Directory Structure)
ReDeal/
 ├── src/
 │   ├── components/
 │   │   └── Header.jsx / Header.styled.js
 │   ├── pages/
 │   │   ├── Home.jsx
 │   │   ├── Login.jsx / Signup.jsx
 │   │   ├── Sell.jsx
 │   │   ├── ProductDetail.jsx
 │   │   ├── MyShop.jsx
 │   │   ├── MyPage.jsx
 │   │   └── NotFound.jsx
 │   ├── styles/ (공통 스타일)
 │   ├── App.jsx
 │   └── main.jsx
 ├── public/
 └── README.md

## 🌟 주요 기능 (Key Features)
✅ 회원가입 / 로그인 / 로그아웃 기능
✅ 메인페이지(Home)
✅ 판매글 등록
✅ 상품 상세페이지
✅ 접근제한


## 💡 학습 포인트 (Learning Points)

-React Router를 이용한 SPA 페이지 구성
-LocalStorage 기반 데이터 저장 및 관리 방식 이해
-styled-components를 활용한 컴포넌트 단위 UI 개발
-Props 및 Hook을 활용한 상태 관리
-중고거래 서비스 기능 흐름 설계 (상품 등록 → 목록 → 상세 → 상점 관리)

