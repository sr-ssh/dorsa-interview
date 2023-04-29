import Button from "@mui/material/Button";

const ButtonLight = ({ children }) => {
    return (
        <Button
            variant="text"
            color="secondary"
            sx={{ backgroundColor: "#F7F0E9", borderRadius: 4, px: 3, fontWeight: 600 }}
            size="large"
        >
            {children}
        </Button>
    );
};

export default ButtonLight;
