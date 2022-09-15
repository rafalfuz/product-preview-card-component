import {
  StyledProductInfoComponent,
  StyledProductInfoComponentContainer,
} from "./ProductInfoComponentStyle";

export const ProductInfoComponent = () => {
  return (
    <StyledProductInfoComponent>
      <StyledProductInfoComponentContainer>
        <p>PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          voluptatibus aut, corporis eaque eum culpa recusandae distinctio!
        </p>
        <h1>Price/ Price</h1>
        <button>Add to card</button>
      </StyledProductInfoComponentContainer>
    </StyledProductInfoComponent>
  );
};
