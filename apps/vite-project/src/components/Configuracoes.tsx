import { Box, Typography, Button, Stack } from "@mui/material";
import Header from "./Header";
import setaLado from "../assets/setaLado.svg"
export default function Configuracoes() {
    return (
        <Box>
            <Header/>
            <Box sx={{ backgroundColor: "#EFEBE7", margin: "20px"}}>
                <Box sx={{ padding: "10px"}}>
                    <Stack direction="column" spacing={3}>
                        <Button sx={{justifyContent: "space-between", backgroundColor: "#fff", padding: "15px", borderRadius: "4px"}}>
                                <Typography sx={{ textTransform: "capitalize", color: "#000"}}>Tema</Typography>
                                <img src={setaLado}/>
                        </Button>
                        <Button sx={{justifyContent: "space-between", backgroundColor: "#fff", padding: "15px", borderRadius: "4px"}}>
                                <Typography sx={{ textTransform: "capitalize", color: "#000"}}>Notificações</Typography>
                                <img src={setaLado}/>
                        </Button>
                        <Button sx={{justifyContent: "space-between", backgroundColor: "#fff", padding: "15px", borderRadius: "4px"}}>
                                <Typography sx={{ textTransform: "capitalize", color: "#000"}}>Posts Votados</Typography>
                                <img src={setaLado}/>
                        </Button>
                        <Button sx={{justifyContent: "space-between", backgroundColor: "#fff", padding: "15px", borderRadius: "4px"}}>
                                <Typography sx={{ textTransform: "capitalize", color: "#000"}}>Amigos</Typography>
                                <img src={setaLado}/>
                        </Button>
                        <Button sx={{justifyContent: "space-between", backgroundColor: "#fff", padding: "15px", borderRadius: "4px"}}>
                                <Typography sx={{ textTransform: "capitalize", color: "#000"}}>Menções</Typography>
                                <img src={setaLado}/>
                        </Button>
                        <Button sx={{justifyContent: "space-between", backgroundColor: "#fff", padding: "15px", borderRadius: "4px"}}>
                                <Typography sx={{ textTransform: "capitalize", color: "#000"}}>Idioma</Typography>
                                <img src={setaLado}/>
                        </Button>
                        <Button sx={{justifyContent: "space-between", backgroundColor: "#fff", padding: "15px", borderRadius: "4px"}}>
                                <Typography sx={{ textTransform: "capitalize", color: "#000"}}>Acessibilidade e tradução</Typography>
                                <img src={setaLado}/>
                        </Button>
                        <Button sx={{justifyContent: "space-between", backgroundColor: "#fff", padding: "15px", borderRadius: "4px"}}>
                                <Typography sx={{ textTransform: "capitalize", color: "#000"}}>Encerrar sessão</Typography>
                                <img src={setaLado}/>
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box> 
    );
} 