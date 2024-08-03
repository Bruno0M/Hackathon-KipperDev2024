import { Box } from "@mui/material";
import Bell from "../assets/Bell.svg";
import Search from "../assets/Search.svg";
import Hamburguer from "../assets/Hamburguer.svg";

export default function Sidebar() {
  return (
    <Box
      component="header"
      sx={{
        px: 1,
        py: 0.8,
        width: "100vw",
        height: "60px",
        opacity: "70%",
        display: "flex",
        position: "sticky",
        flexDirection: "row",
        backdropFilter: "blur(5px)",
        backgroundColor: "secondary.light",
      }}
    >
      <Box
        component={"img"}
        src={Hamburguer}
        sx={{ justifyContent: "flex-start" }}
      />
      <Box sx={{ flex: 1, width: 1, display: "flex", justifyContent: "flex-end" }}>
        <Box component={"img"} src={Search} sx={{ flex: "flex-end" }} />
        <Box component={"img"} src={Bell} sx={{ justifySelf: "flex-end" }} />
      </Box>
    </Box>
  );
}
