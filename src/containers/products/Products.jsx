import Grid2 from "@mui/material/Unstable_Grid2";
import * as React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsCards from "./ProductsCards";

const Products = () => {
    const [sort, setSort] = React.useState();

    return (
        <Grid2 container flexDirection="column" sx={{ position: "relative" }}>
            <ProductsHeader setSort={setSort}/>
            <ProductsCards sort={sort}/>
        </Grid2>
    );
};

export default Products;
