import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./reducer/store";
import theme from "./utils/theme";
import Header from "./components/header/Header";
import Products from "./containers/products/Products";
import RTL from "./utils/rtl";
import { useMediaQuery } from "@mui/material";

function App() {
    const isMobile = useMediaQuery("(max-width:480px)");

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Provider store={store}>
                <RTL>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <div
                            style={{
                                width: isMobile ? "100%" : "480px",
                            }}
                        >
                            <Header />
                            <Products />
                        </div>
                    </ThemeProvider>
                </RTL>
            </Provider>
        </div>
    );
}

export default App;
