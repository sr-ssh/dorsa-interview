import Grid2 from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { useGetAnimationsQuery } from "../../reducer/apiSlice";
import CircularProgress from "@mui/material/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductsCard from "./ProductsCard";

const ProductsCards = ({ sort }) => {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [scrollTop, setScrollTop] = React.useState(0);
    const loaderRef = React.useRef(null);

    React.useEffect(() => {
        setPage(1);
        setData([]);
    }, [sort]);

    const { data: currData, isSuccess } = useGetAnimationsQuery({ page, sort });

    const fetchData = React.useCallback(() => {
        setPage((prevPage) => prevPage + 1);
    }, []);

    const handleScroll = () => {
        setScrollTop(window.scrollY);
    };

    React.useEffect(() => {
        window.scrollTo(0, scrollTop);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currData]);

    React.useEffect(() => {
        isSuccess && setData((prevData) => prevData.concat(currData.data));
    }, [currData]);

    return (
        <Grid2 container flexDirection="column" sx={{ position: "relative" }}>
            <InfiniteScroll
                dataLength={data.length}
                next={() => fetchData()}
                hasMore={true}
                loader={
                    <Grid2 container justifyContent="center" ref={loaderRef}>
                        <CircularProgress />
                    </Grid2>
                }
                scrollThreshold={0.9}
                style={{ overflow: "visible" }}
            >
                <Grid2
                    container
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        px: 2,
                        justifyItems: "center",
                        rowGap: 2,
                    }}
                >
                    {data.map((item) => (
                        <ProductsCard key={item.id} item={item} />
                    ))}
                </Grid2>
            </InfiniteScroll>
        </Grid2>
    );
};

export default ProductsCards;
