import React from 'react';
import GlobalStyles from "./theme/GlobalStyles";
import Router from "./routes";
import {BrowserRouter} from "react-router-dom";
import ThemConfig from "./theme";
import {AuthProvider} from "./contexts/AuthContext";
import {CssBaseline} from "@mui/material";

const App = () => (
    <BrowserRouter>
      <ThemConfig>
        <AuthProvider>
          <CssBaseline/>
          <GlobalStyles />
          <Router />
        </AuthProvider>
      </ThemConfig>
    </BrowserRouter>
);

export default App;
