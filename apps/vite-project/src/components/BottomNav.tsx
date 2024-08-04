import Plus from "../assets/Plus.svg";
import Book from "../assets/Book.svg";
import Location from "../assets/location.svg";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

export default function BottonNav() {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels sx={{ height: 86 }}>
        <BottomNavigationAction
        onClick={() => navigate("/navegar")}
          label="Navegar"
          icon={<Box component="img" src={Location} />}
        />
        <BottomNavigationAction
        onClick={() => navigate("/publicar")}
          label="Publicar"
          icon={<Box component="img" src={Plus} />}
        />
        <BottomNavigationAction
          label="Leituras"
          onClick={() => navigate("/leituras")}
          icon={<Box component="img" src={Book} />}
        />
      </BottomNavigation>
    </Paper>
  );
}
