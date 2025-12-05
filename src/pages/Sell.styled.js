
import styled from "styled-components";

export const SellPageWrapper = styled.form`
  max-width: 1100px;
  margin: 40px auto 80px;
  padding: 0 40px 40px;
`;

export const Section = styled.section`
  padding: 24px 0;
  border-bottom: 1px solid #f1f1f1;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #222;
`;

/* ==== 이미지 영역 ==== */

export const ImageArea = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-top: 16px;
`;

export const ImageBox = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #b0b0b0;
  font-size: 14px;
  gap: 8px;
  overflow: hidden;
`;

export const ImageHelpText = styled.p`
  font-size: 14px;
  color: #b0b0b0;
  margin: 0;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

/* ==== 공통 필드 레이아웃 ==== */

export const FieldRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 18px 0;
`;

export const FieldLabel = styled.div`
  width: 120px;
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;

export const TitleInputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextInput = styled.input`
  flex: 1;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 14px;
  font-size: 15px;

  &:focus {
    border-color: #00c471;
    outline: none;
  }
`;

export const TitleRight = styled.div`
  min-width: 60px;
  text-align: right;
`;

export const CharCount = styled.span`
  font-size: 13px;
  color: #999;
`;

/* ==== 카테고리 ==== */

export const CategorySelect = styled.select`
  flex: 1;
  max-width: 320px;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 12px;
  font-size: 15px;

  &:focus {
    border-color: #00c471;
    outline: none;
  }
`;

/* ==== 가격 ==== */

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: 320px;
`;

export const PriceInput = styled.input`
  flex: 1;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0 12px;
  font-size: 15px;

  &:focus {
    border-color: #00c471;
    outline: none;
  }
`;

export const PriceUnit = styled.span`
  font-size: 15px;
  color: #555;
`;

export const CheckboxRow = styled.div`
  margin-left: 120px;
  margin-top: 8px;
  font-size: 14px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #555;
  }

  input {
    cursor: pointer;
  }
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00c471;
  }
`;
/* ==== 라디오 ==== */

export const RadioRow = styled.div`
  flex: 1;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 18px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
`;

export const RadioInput = styled.input`
  cursor: pointer;
`;

/* ==== 구분선 ==== */

export const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid #f3f3f3;
  margin: 18px 0;
`;

/* ==== 버튼 영역 ==== */

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 32px;
`;

export const SecondaryButton = styled.button`
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #ffffff;
  color: #444;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const PrimaryButton = styled.button`
  padding: 10px 22px;
  border-radius: 8px;
  border: none;
  background-color: #00c471;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #00a860;
  }
`;
