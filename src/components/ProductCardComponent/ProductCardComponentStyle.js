import styled from "styled-components";

export const StyledProductCardComponent = styled.main`
  width: 375px;
  padding: 0 20px;
  height: 607px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 420px) {
    width: 50%;
    height: 50%;
    flex-direction: row;
  }
`;
