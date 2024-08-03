import { Box } from "@mui/material";
export default function NavHeader() {
  return (
    <Box
      component="header"
      sx={{
        opacity:"70%",
        width: "100vw",
        height: "60px",
        position: "sticky",
        backdropFilter: "blur(5px)",
        backgroundColor: "secondary.light",
      }}
    >
     
    </Box>
  );
}
