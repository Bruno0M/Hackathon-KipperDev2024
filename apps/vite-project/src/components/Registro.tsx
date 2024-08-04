import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

import authRegister from "../services/Auth/AuthRegister";

export default function Registro() {
  const [Email, setEmail] = React.useState<string>();
  const [Username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();

  function handleRegister() {
    if (!Email) return;
    if (!password) return;
    if (!Username) return;
    if (!confirmPassword) return;
    const authData: FormData = new FormData();
    authData.append("Email", Email);
    authData.append("Username", Username);
    authData.append("Password", password);
    authData.append("ConfirmPassword", confirmPassword);
    authRegister(authData);
  }
  return (
    <Box
      component="form"
      sx={{
        width: "320px",
        border: "1px solid #D9D9D9",
        borderRadius: "8px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <div id="inputs">
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Nome
        </Typography>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Email
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
        <Typography sx={{ marginBottom: "5px" }}>Senha</Typography>
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px" }}
        />
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Confirme sua senha
        </Typography>
        <TextField
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "40px",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Button
          sx={{
            width: "100%",
            height: "40px",
            fontSize: "13px",
            borderRadius: "8px",
            border: "1px solid #104015",
            color: "#F5F5F5",
            textTransform: "capitalize",
            backgroundColor: "#008510",
            "&:hover": {
              backgroundColor: "#104015",
            },
          }}
          variant="outlined"
          onClick={handleRegister}
        >
          Criar conta
        </Button>
      </Box>
    </Box>
  );
}
