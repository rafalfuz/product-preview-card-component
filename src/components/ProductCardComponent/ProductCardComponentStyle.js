import styled from "styled-components";

export const StyledProductCardComponent = styled.main`
  width: 320px;
  height: 520px;
  border: 1px solid violet;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 420px) {
    width: 840px;
    height: 520px;
    flex-direction: row;
  }
`;
