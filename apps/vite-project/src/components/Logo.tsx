import { Box } from "@mui/material";
import Gaia from "../assets/Gaia.svg";
export default function Logo() {
  return <Box component={"img"} src={Gaia} sx={{
    width: "260px",
    margin: "0 auto"
  }}/>;
}
