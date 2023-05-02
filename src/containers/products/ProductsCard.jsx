import Grid2 from "@mui/material/Unstable_Grid2";
import * as React from "react";
import Typography from "@mui/material/Typography";

const ProductsCard = ({item }) => {

    return (
        <Grid2
            container
            flexDirection="column"
            sx={{ width: "170px", borderRadius: 4 }}
            gap={1}
        >
            <img
                src={item.reviewsThumbnailUrl}
                alt={item.reviewsTitle}
                width="170"
                height={250}
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
    );
};

export default ProductsCard;
