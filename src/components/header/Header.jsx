import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="inherit"
                sx={{ boxShadow: "none" }}
            >
                <Toolbar sx={{ justifyContent: "start" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="back"
                    >
                        <img src="/images/arrow_right.svg" alt="arrow_right" />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                        بازگشت
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
