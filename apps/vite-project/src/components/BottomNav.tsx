import Plus from "../assets/Plus.svg"
import Book from "../assets/Book.svg"
import Location from "../assets/location.svg"
import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";

export default function BottonNav() {
  return (
    <Paper sx={{position: "fixed", bottom: 0, left: 0, right: 0}} elevation={3}>      
      <BottomNavigation showLabels sx={{height: 86}}>
        <BottomNavigationAction label="Navegar" icon={<Box component="img" src={Location} />} />
        <BottomNavigationAction label="Publicar" icon={<Box component="img" src={Plus} />} />
        <BottomNavigationAction label="Leituras" icon={<Box component="img" src={Book} />} />
      </BottomNavigation>
    </Paper>
  );
}
