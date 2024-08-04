import { Box, Stack, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavPublish() {
  return (
    <Box
      sx={{
        top: 0,
        lef: 0,
        right: 0,
        zInde: 99,
        width: "100%",
        position: "fixed",
        backdropFilter: "blur(5px)",
        backgroundColor: "#00C04041",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          padding: "5px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        direction="row"
      >
        <Link to="/Home">
          <IconButton>
            <img src="./src/assets/close.svg" alt="close-button" />
          </IconButton>
        </Link>
        <Typography sx={{ fontSize: "22px", fontWeight: "400" }}>
          Publicar
        </Typography>
        <img src="./src/assets/AvatarPlaceholder.svg" alt="" />
      </Stack>
    </Box>
  );
}
