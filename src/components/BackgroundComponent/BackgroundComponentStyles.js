import styled from "styled-components";

export const StyledBackgroundComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.cream};
  display: flex;
  justify-content: center;
  align-items: center;
`;
