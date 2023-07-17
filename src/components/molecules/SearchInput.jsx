import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log("search input");
  return (
    <SContainer>
      <Input placeholder="search conditions" />
      <SButtonWrapper>
        <PrimaryButton>SEARCH</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
