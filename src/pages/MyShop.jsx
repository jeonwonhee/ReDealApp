import React from 'react';

const MyPage = ({ userName }) => {
  return (
    <div>
      <h2>마이페이지</h2>
      <p>{userName || '회원'}님, 안녕하세요 👋</p>
      <p>여기에 내 정보, 관심 상품 등 넣으면 됨</p>
    </div>
  );
};

export default MyPage;
