import { Box, Typography, Stack, IconButton } from "@mui/material";
import { BrowserRouter as Routes, Route, useLocation } from 'react-router-dom';
import close from "../assets/close.svg"
import AvatarPlaceholder from "../assets/AvatarPlaceholder.svg"

function HandleText() {
  const location = useLocation();
  return location.pathname 
}

export default function Header() {
    return (
        <Box sx={{ width: "100%vw", padding: "0px 20px 0px 20px", backdropFilter: "blur(5px)",
          backgroundColor: "#00C04041"}}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center", paddingY: "15px"}}
        >
          <IconButton>
            <img src={close} alt="close button"/>
          </IconButton>
          <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
          {HandleText().replace("/", "")} 
          </Typography>
          <img src={AvatarPlaceholder} alt="avatar"/>
        </Stack>
      </Box>
    );
}