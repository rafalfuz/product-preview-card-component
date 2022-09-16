import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { BackgroundComponent } from "./components/BackgroundComponent/BackgroundComponent";
import { ProductCardComponent } from "./components/ProductCardComponent/ProductCardComponent";

export const App = () => {
  const dataOfProd = {
    kindOfProd: "PERFUME",
    nameOfProduct: `Gabrielle Essence Eau De Parfum`,
    description:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    newPrice: "$149.99",
    oldPrice: "$169.99",
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BackgroundComponent>
          <ProductCardComponent
            kindOfProd={dataOfProd.kindOfProd}
            nameOfProd={dataOfProd.nameOfProduct}
            descriptionOfProd={dataOfProd.description}
            newPrice={dataOfProd.newPrice}
            oldPrice={dataOfProd.oldPrice}
          />
        </BackgroundComponent>
      </ThemeProvider>
    </>
  );
};
