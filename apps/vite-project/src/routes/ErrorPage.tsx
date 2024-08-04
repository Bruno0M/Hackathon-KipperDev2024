import { Box, Typography } from "@mui/material";
export default function ErrorPage() {
  return (
    <Box
      component="form"
      sx={{
        mt: 10,
        mx: "auto",
        width: "400px",
        height: "230px",
        padding: "24px",
        textAlign: "center",
        borderRadius: "8px",
        border: "1px solid #D9D9D9",
      }}
    >
      <Typography
        variant="h1"
        sx={{ marginBottom: "5px", color: "#1E1E1E", margin: "0 auto" }}
      >
        ERROR 404
      </Typography>
    </Box>
  );
}
