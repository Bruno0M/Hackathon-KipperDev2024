import { Box } from "@mui/material";
import Logo from "../components/Logo";
import Registro from "../components/Registro";
export default function Registrar() {
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
          <Registro />
    </Box>
    </>
  );
}
