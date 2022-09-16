import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 5px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.darkCyan};
  color: ${({ theme }) => theme.cream};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  &:hover {
    background-color: ${({ theme }) => theme.veryDarkBlue};
    cursor: pointer;
  }
`;
