import styled from "styled-components";

export const StyledProductImageComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: tomato;
  border-radius: 20px 20px 0 0;
  @media screen and (min-width: 420px) {
    border-radius: 20px 0 0 20px;
  }
`;
