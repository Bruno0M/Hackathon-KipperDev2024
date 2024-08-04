import Bell from "../assets/Bell.svg";
import Search from "../assets/Search.svg";
import { Box, Drawer } from "@mui/material";
import Hamburguer from "../assets/Hamburguer.svg";
import React from "react";
import Sidebar from "./Sidebar";

export default function NavHeader() {
  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  return (
    <Box
      component="header"
      sx={{
        px: 1,
        py: 0.8,
        width: "100%",
        height: "60px",
        opacity: "70%",
        display: "flex",
        position: "sticky",
        flexDirection: "row",
        backdropFilter: "blur(5px)",
        backgroundColor: "#00851080",
      }}
    >
      <Box
        component={"img"}
        src={Hamburguer}
        sx={{ justifyContent: "flex-start" }}
        onClick={toggleDrawer}
      />
      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        anchor="left"
        variant={"temporary"}
        sx={{ backgroundColor: "#ffffff10" }}
      >
        <Sidebar />
      </Drawer>
      <Box
        sx={{
          gap: 1,
          flex: 1,
          width: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box component={"img"} src={Search} sx={{ flex: "flex-end" }} />
        <Box component={"img"} src={Bell} sx={{ justifySelf: "flex-end" }} />
      </Box>
    </Box>
  );
}
