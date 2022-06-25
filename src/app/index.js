import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyles from "styles/global";

import Routes from "routes";
import Toast from "components/Toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
      <Toast />
    </ThemeProvider>
  );
}

export default App;
