import { Box } from "@mui/material";
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
        <Box component="span" sx={{ backgroundColor: "#008510D0", p: 1 }}>
          <Box
            component={"img"}
            src={AvatarPlaceholder}
            sx={{ justifyContent: "flex-start" }}
          />
          <Box component={"span"} sx={{ textAlign: "center" }}>
            Perfil
          </Box>
        </Box>
        <SidebarRow image={Lock} title={"Segurança e privacidade"} />
        <SidebarRow image={Save} title={"Salvos"} />
        <SidebarRow image={Draft} title={"Rascunho"} />
        <SidebarRow image={Gear} title={"Configurações"} />
      </Box>
    </Box>
  );
}
