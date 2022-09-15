import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { theme } from "./theme/mainTheme";
import { BackgroundComponent } from "./components/BackgroundComponent/BackgroundComponent";
import { ProductCardComponent } from "./components/ProductCardComponent/ProductCardComponent";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BackgroundComponent>
          <ProductCardComponent />
        </BackgroundComponent>
      </ThemeProvider>
    </>
  );
};
