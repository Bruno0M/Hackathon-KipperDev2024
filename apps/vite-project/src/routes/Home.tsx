import { Box } from "@mui/material";
import BottonNav from "../components/BottomNav";
import NavHeader from "../components/NavHeader";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <Box sx={{ height: "100%" }}>
      <NavHeader />
      <Box sx={{mb: 30}}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </Box>
      <BottonNav />
    </Box>
  );
}
