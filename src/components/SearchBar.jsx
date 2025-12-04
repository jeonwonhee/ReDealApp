import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const SearchInput = styled.input`
  width: 80%;
  max-width: 600px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid #ddd;
  padding: 0 16px;
  font-size: 14px;
`;

const SearchBar = ({ keyword, onChange }) => {
  return (
    <SearchBarWrapper>
      <SearchInput
        placeholder="어떤 상품을 찾으시나요? 키워드를 입력해보세요."
        value={keyword}
        onChange={(e) => onChange(e.target.value)}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
