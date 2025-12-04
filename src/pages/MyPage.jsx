import React from 'react';

const MyPage = ({ userId }) => {
  return (
    <div>
      <h2>마이페이지</h2>
      <p>{userId}님 안녕하세요 👋</p>
      <p>여기에 내 정보, 관심 상품 등을 보여주는 영역입니다.</p>
    </div>
  );
};

export default MyPage;
