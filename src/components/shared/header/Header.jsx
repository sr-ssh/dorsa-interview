import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ButtonLight from "../ButtonLight";
import Grid2 from "@mui/material/Unstable_Grid2";
import SearchInput from "./Select";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img
                            src="/images/logo.svg"
                            alt="baloot-logo"
                            height={55}
                        />
                    </IconButton>
                    <Grid2>
                        <SearchInput />
                    </Grid2>
                    <Grid2 container gap={1}>
                        <ButtonLight>Register</ButtonLight>
                        <ButtonLight>Login</ButtonLight>
                    </Grid2>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
