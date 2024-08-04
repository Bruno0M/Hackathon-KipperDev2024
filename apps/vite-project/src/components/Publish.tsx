import { Box, Stack, IconButton, TextField } from "@mui/material";
import NavPublish from "./NavPublish";

export default function Publish() {
  return (
    <>
      <NavPublish />
      <Box
        sx={{
          mt: 7.5,
          flex: 1,
          mb: 10.5,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "primary",
          justifyItems: "space-around",
        }}
        component="form"
      >
        <TextField
          sx={{ width: "100%", minHeight: 1 }}
          multiline={true}
          placeholder="Conteúdo"
        />
        <Box sx={{ px: "10px", m: 0, height: 1 }}>
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
      </Box>
    </>
  );
}
