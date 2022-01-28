import React from "react";
import styled from "styled-components";
import OptionSetList from "./OptionSetList";

function ProductOptionContent() {
  return (
    <OptionContentContainer>
      <OptionSetList />
    </OptionContentContainer>
  );
}

const OptionContentContainer = styled.div`
  overflow: scroll;
  padding: 30px;
  background-color: #f0f0f0;
  max-height: 90vh;
`;

export default ProductOptionContent;
