import styled from "styled-components";

export const StyledProductInfoComponent = styled.div`
  display: flex;
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0 0 20px 20px;
  @media screen and (min-width: 420px) {
    border-radius: 0 20px 20px 0;
  }
`;

export const StyledProductInfoComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (min-width: 420px) {
    width: 80%;
  }
`;

export const StyledKindOfProduct = styled.p`
  letter-spacing: 2px;
  color: ${({ theme }) => theme.darkGrayishBlue};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const StyledNameOfProduct = styled.h1`
  color: ${({ theme }) => theme.veryDarkBlue};
  font-family: ${({ theme }) => theme.fontFamily.fraunces};
  padding: 10px 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  @media screen and (min-width: 420px) {
    padding: 20px 0;
  }
`;

export const StyledDescriptionOfProduct = styled.p`
  padding: 10px 0;
  color: ${({ theme }) => theme.darkGrayishBlue};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 150%;
  @media screen and (min-width: 420px) {
    padding: 20px 0;
  }
`;
export const StyledPriceContainer = styled.div`
  display: flex;
  align-items: space-between;
`;
export const StyledNewPriceOfProduct = styled.p`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fontFamily.fraunces};
  flex-basis: 50%;
  color: ${({ theme }) => theme.darkCyan};
`;
export const StyledOldPriceOfProduct = styled.sup`
  flex-basis: 50%;
  color: ${({ theme }) => theme.darkGrayishBlue};
  text-decoration: line-through;
`;
