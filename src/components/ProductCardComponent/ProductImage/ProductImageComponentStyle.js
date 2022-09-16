import styled from "styled-components";

export const StyledProductImageComponent = styled.div`
  background-image: ${({ productImageMobileAndDesktop }) =>
    `url(${productImageMobileAndDesktop.productImageMobile})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  @media screen and (min-width: 420px) {
    flex-basis: 100%;
    background-image: ${({ productImageMobileAndDesktop }) =>
      `url(${productImageMobileAndDesktop.productImageDesktop})`};
    border-radius: 20px 0 0 20px;
  }
`;
