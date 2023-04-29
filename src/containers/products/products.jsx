import Grid2 from "@mui/material/Unstable_Grid2";
import * as React from "react";
import ProductsHeader from "./productsHeader";
import { useGetAnimationsQuery } from "../../reducer/apiSlice";
import { Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsCards from "./producsCards";

const Products = () => {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);

    // const {
    //     data: currData,
    //     isLoading,
    //     isSuccess,
    // } = useGetAnimationsQuery({ page });

    // const fetchData = () => {
    //     setPage((prevPage) => prevPage + 1);

    // };

    // React.useEffect(() => {
    //     isSuccess && setData((prevData) => prevData.concat(currData.data));
    // }, [currData]);

    return (
        <Grid2 container flexDirection="column" sx={{ position: "relative" }}>
            <ProductsHeader />
            <ProductsCards />
        </Grid2>
    );
};

export default Products;
