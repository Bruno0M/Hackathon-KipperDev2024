import { Box, Stack, IconButton, TextField } from "@mui/material";
import NavBar from "./NavBar";
import NavPublish from "./NavPublish";

export default function Publicar() {
  return (
    <>
      <NavPublish />
      <Box
        sx={{
          backgroundColor: "#c1c1c1",
          height: "100%vw",
        }}
        component="form"
      >
        <Stack sx={{ width: "100%", height: "100%" }} direction="row">
          <TextField
            sx={{ width: "100%",  }}
            multiline={true}
            rows={25}
            maxRows={25}
            placeholder="Conteúdo"
          ></TextField>
        </Stack>
        <Box sx={{ padding: "10px" }}>
          <Stack sx={{ justifyContent: "space-between" }} direction="row">
            <Box>
              <IconButton>
                <img src="./src/assets/upload.svg" />
              </IconButton>
              <IconButton>
                <img src="./src/assets/globe.svg" />
              </IconButton>
              <IconButton>
                <img src="./src/assets/location.svg" />
              </IconButton>
            </Box>
            <IconButton>
              <img src="./src/assets/send.svg" />
            </IconButton>
          </Stack>
        </Box>
        <NavBar />
      </Box>
    </>
  );
}
