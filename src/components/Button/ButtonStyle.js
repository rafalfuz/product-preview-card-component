import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 5px;
  margin: 10px 0;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.darkCyan};
  color: ${({ theme }) => theme.cream};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  @media screen and (min-width: 420px) {
    margin: 20px 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.veryDarkBlue};
    cursor: pointer;
  }
`;
