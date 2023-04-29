import { Paper, Switch, Typography, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
        margin: theme.spacing(0.5),
        border: 0,
        "&.Mui-disabled": {
            border: 0,
        },
        "&:not(:first-of-type)": {
            borderRadius: theme.shape.borderRadius,
            borderRadius: 16,
        },
        "&:first-of-type": {
            borderRadius: theme.shape.borderRadius,
            borderRadius: 16,
        },
        "&.Mui-selected,&.Mui-selected:hover": {
            backgroundColor: "#A97B47",
            color: "#fff",
        },
    },
}));

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

const Products = () => {
    const [alignment, setAlignment] = React.useState("price");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <Grid2
            container
            flexDirection="column"
            sx={{ position: "relative", top: "79px", mx: 30 }}
        >
            <Grid2>
                <Paper
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#F7F0E9;",
                        borderRadius: 4,
                        width: "100%",
                        boxShadow: "none",
                        p: 2,
                    }}
                >
                    <Grid2 container alignItems="center" gap={2}>
                        <Typography variant="h5" color="primary">
                            Available commodities
                        </Typography>
                        <IOSSwitch sx={{ m: 1 }} />
                    </Grid2>
                    <Grid2 container alignItems="center" gap={2}>
                        <Typography variant="h6" color="primary">
                            sort by:
                        </Typography>
                        <StyledToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton sx={{ px: 4 }} value="name">
                                name
                            </ToggleButton>
                            <ToggleButton sx={{ px: 4 }} value="price">
                                price
                            </ToggleButton>
                        </StyledToggleButtonGroup>
                    </Grid2>
                </Paper>
            </Grid2>
            <Grid2></Grid2>
        </Grid2>
    );
};

export default Products;
