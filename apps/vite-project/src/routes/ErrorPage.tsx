import { Box, Typography } from "@mui/material";
export default function ErrorPage() {
  return (
    <Box
      component="form"
      sx={{
        width: "300px",
        height: "230px",
        border: "1px solid #D9D9D9",
        borderRadius: "8px",
        margin: "0 auto",
        padding: "24px",
        marginTop: "50px",
      }}
    >
      <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
        error 404
      </Typography>
    </Box>
  );
}
