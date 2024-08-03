import { Box, Typography, Avatar, Stack, IconButton } from "@mui/material";
import LeafUpvote from "../assets/LeafUpvote.svg"

export default function Posts() {
    return (
        <Box sx={{width: "100%", maxWidth: "500px", height: "350px", padding: "0px 20px 0px 20px", margin: "0 auto"}}>
            <Box>
                <Stack direction="row" spacing={2} sx={{alignItems: "center", my: "5px"}}>
                    <Avatar sx={{width: "50px", height: "50px", border: "2px solid #00C040"}} alt="foto-usuario"/>
                    <Typography sx={{fontSize: "14px", fontWeight: "600"}}>Nome do Autor</Typography>
                </Stack>
            </Box>
            <Box sx={{backgroundColor: "#F1F1F1", height: "100%", marginY: "8px"}}>
                <Box sx={{aspectRatio: "1 / 1", objectFit: "contain"}}>imagem placeholder</Box>
            </Box>
            <Box>
                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                    <IconButton>
                        <img style={{width: "50.37px", height: "53px"}} src={LeafUpvote}/>
                    </IconButton>
                    <Box>
                        <IconButton>
                            <img style={{width: "29.51px", height: "35.55px"}} src="./src/assets/chat.png"/>
                        </IconButton>
                        <IconButton>
                            <img style={{width: "30.72px", height: "32.64px"}} src="./src/assets/share.png"/>
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}