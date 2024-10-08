import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

import authLogin from "../services/Auth/AuthLogin";

export default function Login() {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const navigate = useNavigate();
  const [formsError, setFormsError] = React.useState({
    email: false,
    password: false,
  })

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setFormsError((prev) => ({ ...prev, email: value.length === 0 }));
    
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setFormsError((prev) => ({ ...prev, password: value.length === 0 }));
  };


  async function handleLogin() {
    if (!email || !password) return;

    const authData = new FormData();
    authData.append("email", email);
    authData.append("password", password);
    try {
      const response = await authLogin(authData);
      console.log('API Response:', response); 
      if (response && response.data) {
        console.log('Response Data:', response.data);
        const { data } = response;
        if (data && data.token) {
          localStorage.setItem('token', data.token);
          navigate("/Home");
        } else {
          console.error('Token is missing from the response data');
        }
      } else {
        console.error('Response data is missing');
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  }
  return (
    <Box
      component="form"
      sx={{
        width: "300px",
        border: "1px solid #D9D9D9",
        borderRadius: "8px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <form >
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Email
        </Typography>
        <TextField
          onChange={handleEmailChange}
          error={formsError.email}
          helperText={formsError.email == true ? "Este campo é obrigatório" : ""}
          placeholder="*******"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "20px", color: "#1E1E1E", }}
        />
        <Typography sx={{ marginBottom: "5px" }}>Senha</Typography>
        <TextField
          onChange={handlePasswordChange}
          error={formsError.password}
          helperText={formsError.password == true ? "Este campo é obrigatório" : ""}
          placeholder="*******"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "20px" }}
        />
      </form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: 2,
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Button
          sx={{
            width: "128px",
            height: "40px",
            fontSize: "13px",
            borderRadius: "8px",
            border: "1px solid #104015",
            color: "#104015",
            textTransform: "capitalize",
          }}
          variant="outlined"
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <Link to={"/Register"}>
          <Button
            sx={{
              width: "128px",
              height: "40px",
              fontSize: "13px",
              borderRadius: "8px",
              border: "1px solid #104015",
              color: "#F5F5F5",
              backgroundColor: "#008510",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#104015",
              },
            }}
            variant="outlined"
          >
            Criar Conta
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
