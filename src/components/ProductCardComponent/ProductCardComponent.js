import { StyledProductCardComponent } from "./ProductCardComponentStyle";
import { ProductImageComponent } from "./ProductImage/ProductImageComponent";
import { ProductInfoComponent } from "./ProductInfo/ProductInfoComponent";
import productImageMobile from "../../assets/product-preview-card-component-main/images/image-product-mobile.jpg";
import productImageDesktop from "../../assets/product-preview-card-component-main/images/image-product-desktop.jpg";

const products = { productImageMobile, productImageDesktop };

export const ProductCardComponent = ({
  kindOfProd,
  nameOfProd,
  descriptionOfProd,
  newPrice,
  oldPrice,
}) => {
  return (
    <StyledProductCardComponent>
      <ProductImageComponent productImageMobileAndDesktop={products} />
      <ProductInfoComponent
        kindOfProd={kindOfProd}
        nameOfProd={nameOfProd}
        descriptionOfProd={descriptionOfProd}
        newPrice={newPrice}
        oldPrice={oldPrice}
      />
    </StyledProductCardComponent>
  );
};
