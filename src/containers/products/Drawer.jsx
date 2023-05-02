import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
        theme.palette.mode === "light"
            ? grey[100]
            : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 60,
    height: 4,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 30px)",
}));

function CustomeDrawer({ open, setOpen, setSort, ...props }) {
    const { window } = props;
    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        overflow: "visible",
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 4,
                        pt: "36px",
                        height: "100%",
                        overflow: "auto",
                        borderTopLeftRadius: "inherit",
                        borderTopRightRadius: "inherit",
                        direction: "ltr",
                    }}
                >
                    <Puller />
                    <FormControl>
                        <FormLabel
                            id="demo-radio-buttons-group-label"
                            variant="subtitle1"
                            sx={{
                                color: "#000",
                                mb: 2,
                                fontWeight: "bold",
                                "&.Mui-focused": { color: "#000" },
                            }}
                            filled
                        >
                            مرتب‌سازی بر اساس
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onClick={(value) => {setSort(value.target.value);setOpen(false)}}
                        >
                            <FormControlLabel
                                value="rate"
                                control={<Radio color="success" />}
                                label="بیشترین امتیاز"
                            />
                            <FormControlLabel
                                value="view"
                                control={<Radio color="success" />}
                                label="بیشترین بازدید"
                            />
                            <FormControlLabel
                                value="newest"
                                control={<Radio color="success" />}
                                label="جدیدترین"
                            />
                        </RadioGroup>
                    </FormControl>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

CustomeDrawer.propTypes = {
    window: PropTypes.func,
};

export default CustomeDrawer;
