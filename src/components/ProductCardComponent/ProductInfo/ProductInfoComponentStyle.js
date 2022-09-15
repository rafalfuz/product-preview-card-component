import styled from "styled-components";

export const StyledProductInfoComponent = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0 0 20px 20px;
  @media screen and (min-width: 420px) {
    border-radius: 0 20px 20px 0;
  }
`;
