import Grid2 from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { useGetAnimationsQuery } from "../../reducer/apiSlice";
import { CircularProgress, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductsCards = () => {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const loaderRef = React.useRef(null);
    const [scrollTop, setScrollTop] = React.useState(0);

    const { data: currData, isSuccess } = useGetAnimationsQuery({ page });

    const fetchData = () => {
        setPage((prevPage) => prevPage + 1);
    };
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
                        <Grid2
                            key={item.id}
                            container
                            flexDirection="column"
                            sx={{ width: "190px", borderRadius: 4 }}
                            gap={1}
                        >
                            <img
                                src={item.reviewsThumbnailUrl}
                                alt={item.reviewsTitle}
                                width="190"
                                height={280}
                                style={{
                                    borderRadius: "16px",
                                }}
                            />
                            <Typography>{item.reviewsTitle}</Typography>
                            <Grid2 container gap={1}>
                                <img src="images/star.svg" alt="star" />
                                <Typography>{item.reviewsRate}</Typography>
                            </Grid2>
                        </Grid2>
                    ))}
                </Grid2>
            </InfiniteScroll>
        </Grid2>
    );
};

export default ProductsCards;
