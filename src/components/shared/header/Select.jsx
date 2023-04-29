import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function SearchInput() {
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Paper
            component="form"
            sx={{
                p: "0",
                display: "flex",
                alignItems: "center",
                width: 400,
                boxShadow: "none",
                backgroundColor: "#F7F0E9",
                borderRadius: 4,
            }}
        >
            <FormControl sx={{ border: "none" }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "#D8C1A8",
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        borderRadius: 4,
                    }}
                    MenuProps={{
                        sx: {
                            " .MuiMenu-paper": { backgroundColor: "#D8C1A8" },
                        },
                    }}
                >
                    <MenuItem value={10}>name</MenuItem>
                    <MenuItem value={20}>category</MenuItem>
                    <MenuItem value={30}>provider</MenuItem>
                </Select>
            </FormControl>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="search your product ..."
                inputProps={{ "aria-label": "search your product" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <img src="/images/search.svg" alt="search" width={30} />
            </IconButton>
        </Paper>
    );
}
