import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./reducer/store";
import theme from "./utils/theme";
import Header from "./components/shared/header/Header";
import Products from "./containers/products/products";
import RTL from "./utils/rtl";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RTL>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Header />
                        <Products />
                    </ThemeProvider>
                </RTL>
            </Provider>
        </div>
    );
}

export default App;
