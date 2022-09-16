import {
  StyledProductInfoComponent,
  StyledProductInfoComponentContainer,
  StyledKindOfProduct,
  StyledNameOfProduct,
  StyledDescriptionOfProduct,
  StyledPriceContainer,
  StyledNewPriceOfProduct,
  StyledOldPriceOfProduct,
} from "./ProductInfoComponentStyle";

import { Button } from "../../Button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ProductInfoComponent = ({
  kindOfProd,
  nameOfProd,
  descriptionOfProd,
  newPrice,
  oldPrice,
}) => {
  return (
    <StyledProductInfoComponent>
      <StyledProductInfoComponentContainer>
        <StyledKindOfProduct>{kindOfProd}</StyledKindOfProduct>
        <StyledNameOfProduct>{nameOfProd}</StyledNameOfProduct>
        <StyledDescriptionOfProduct>
          {descriptionOfProd}
        </StyledDescriptionOfProduct>
        <StyledPriceContainer>
          <StyledNewPriceOfProduct>{newPrice}</StyledNewPriceOfProduct>
          <StyledOldPriceOfProduct>{oldPrice}</StyledOldPriceOfProduct>
        </StyledPriceContainer>

        <Button>
          <AiOutlineShoppingCart /> Add to Cart
        </Button>
      </StyledProductInfoComponentContainer>
    </StyledProductInfoComponent>
  );
};
