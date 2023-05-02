import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Grid2 from "@mui/material/Unstable_Grid2";
import * as React from "react";
import CustomeDrawer from "./Drawer";

const ProductsHeader = ({setSort}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Grid2>
            <Paper
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    boxShadow: "none",
                    p: 2,
                }}
            >
                <Grid2 container flexDirection="column" gap={1}>
                    <Typography variant="body1">چیارو ببینه؟</Typography>
                    <Typography variant="caption" color="text.secondary">
                        مناسب برای ۳ تا ۷ سال
                    </Typography>
                </Grid2>
                <Grid2
                    container
                    flexDirection="row"
                    alignItems="center"
                    flexWrap="noWrap"
                    onClick={() => setOpen(true)}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <img src="/images/sort.svg" alt="sort" />
                    </IconButton>
                    <Typography variant="caption" color="text.secondary">
                        مرتب‌سازی
                    </Typography>
                </Grid2>
            </Paper>
            <CustomeDrawer open={open} setOpen={setOpen} setSort={setSort}/>
        </Grid2>
    );
};

export default ProductsHeader;
