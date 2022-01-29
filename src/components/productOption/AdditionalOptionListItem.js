import CustomButton from "components/common/CustomButton";
import Input from "components/common/Input";
import React from "react";
import styled from "styled-components";

function AdditionalOptionListItem() {
  return (
    <AdditionalOptionItemStyled>
      ㄴ
      <OptionInput width={320} height={45} placeholder="추가 옵션명" />
      <OptionInput width={250} height={45} placeholder="추가 옵션 정상가" />원
      <CustomButton width={50} height={35} variant="tertiary">
        삭제
      </CustomButton>
    </AdditionalOptionItemStyled>
  );
}

const AdditionalOptionItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OptionInput = styled(Input)`
  margin-right: 8px;
`;

export default AdditionalOptionListItem;