import { Box, Typography } from "@mui/material";
import SidebarRow from "./SidebarRow";
import Save from "../assets/Save.svg";
import Lock from "../assets/Lock.svg";
import Gear from "../assets/Gear.svg";
import Draft from "../assets/Draft.svg";
import AvatarPlaceholder from "../assets/AvatarPlaceholder.svg";

export default function Sidebar() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#008510D0" }}>
      <Box
        sx={{
          ml: 0,
          width: "100%",
          display: "flex",
          minHeight: "100vh",
          minWidth: "max-content",
          flexDirection: "column",
          backdropFilter: "blur(5)",
        }}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: "#008510f0",
            px: 1.5,
            py: 2,
            width: 1,
            display: "flex",
            minHeight: "20px",
            backdropFilter: "blur(5)",
          }}
        >
          <Box
            component={"img"}
            src={AvatarPlaceholder}
            sx={{ justifyContent: "flex-start" }}
          />
          <Typography variant="h3" sx={{ height: 1, pl: 2, m: "auto 0" }}>Perfil</Typography>
        </Box>
        <SidebarRow image={Save} title={"Salvos"} />
        <SidebarRow image={Draft} title={"Rascunho"} />
        <SidebarRow image={Gear} title={"Configurações"} />
        <SidebarRow image={Lock} title={"Segurança e privacidade"} />
      </Box>
    </Box>
  );
}
