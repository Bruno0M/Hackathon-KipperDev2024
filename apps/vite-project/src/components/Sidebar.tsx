import { Box } from "@mui/material";
import SidebarRow from "./SidebarRow";
import Save from "../assets/Save.svg";
import Lock from "../assets/Lock.svg";
import Gear from "../assets/Gear.svg";
import Draft from "../assets/Draft.svg";
import AvatarPlaceholder from "../assets/AvatarPlaceholder.svg";

export default function Sidebar() {
  return (
    <Box sx={{ width: "100vw", position: "absolute", top: 0, left: 0 }}>
      <Box
        sx={{
          ml: 0,
          width: "30%",
          display: "flex",
          minWidth: "max-content",
          flexDirection: "column",
          backdropFilter: "blur(5)",
        }}
      >
        <Box component="span" sx={{ backgroundColor: "#008510D0" }}>
          <Box
            component={"img"}
            src={AvatarPlaceholder}
            sx={{ justifyContent: "flex-start" }}
          />
          <Box component={"p"} sx={{ justifySelf: "flex-end" }}>
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
