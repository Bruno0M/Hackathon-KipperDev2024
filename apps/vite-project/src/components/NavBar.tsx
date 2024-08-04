import { Box, Typography, Stack, IconButton } from "@mui/material";
export default function NavBar() {
    return (
        <Box sx={{ width: "100%vw", height: "80px", backgroundColor: "#EFEBE7", alignContent: "center" }}>
            <Stack direction="row" sx={{ justifyContent: "space-around" }}>
                <IconButton>
                    <img src="./src/assets/browse.svg"/>
                </IconButton>
                <IconButton>
                    <img src="./src/assets/publish.svg"/>
                </IconButton>
                <IconButton>
                    <img src="./src/assets/bell.svg"/>
                </IconButton>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: "space-around" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600"}}>Navegar</Typography>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>Publicar</Typography>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>Updates</Typography>
            </Stack>
        </Box>
    );
}