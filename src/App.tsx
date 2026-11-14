import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";

import i18n from "./config/i18n";
import { defaultTheme } from "./config/theme";
import { Normalize } from "./config/styles";
import { Index } from "./pages/Index";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <Normalize />
        {/* Pages */}
        <Index />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
