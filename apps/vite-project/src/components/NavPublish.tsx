import { Box, Stack, IconButton, Typography } from "@mui/material";

export default function NavPublish() {
    return (
        <Box sx={{width: "100%vw", backgroundColor: "#00C040A6"}}>
            <Stack sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px"}} direction="row">
                <IconButton>
                    <img src="./src/assets/close.svg" alt="" />
                </IconButton>
                <Typography sx={{ fontSize: "22px", fontWeight: "400"}}>Publicar</Typography>
                <img src="./src/assets/AvatarPlaceholder.svg" alt="" />
            </Stack>
        </Box>
    );
}