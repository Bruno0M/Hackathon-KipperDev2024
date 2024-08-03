import { Box } from "@mui/material";
import Login from "../components/Login";
import Logo from "../components/Logo";
export default function LogIn() {
  return (
    <>
    <Box component="section" sx={{
        my: "20px",
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }}>
        
          <Logo />
          <Login />
    </Box>
    </>
  );
}
