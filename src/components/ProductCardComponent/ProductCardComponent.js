import { StyledProductCardComponent } from "./ProductCardComponentStyle";
import { ProductImageComponent } from "./ProductImage/ProductImageComponent";
import { ProductInfoComponent } from "./ProductInfo/ProductInfoComponent";

export const ProductCardComponent = () => {
  return (
    <StyledProductCardComponent>
      <ProductImageComponent />
      <ProductInfoComponent />
    </StyledProductCardComponent>
  );
};
