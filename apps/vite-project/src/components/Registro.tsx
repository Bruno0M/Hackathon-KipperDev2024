import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Input,
  IconButton,
  Badge,
} from "@mui/material";
import AvatarPlaceholder from "../assets/AvatarPlaceholder.svg";
import Upload from "../assets/upload.svg";
import authRegister from "../services/Auth/AuthRegister";

export default function Registro() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [profileUrl, setProfileUrl] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileUrl(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append("Username", formData.username);
    data.append("Email", formData.email);
    if (profileUrl) {
      data.append("ProfileUrl", profileUrl);
    }
    data.append("Password", formData.password);
    data.append("ConfirmPassword", formData.confirmPassword);

    try {
      const response = await authRegister(data);
      console.log(response);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <Box
      component="form"
      sx={{width: "100%vw", display: "flex", flexDirection: "column", alignItems: "center"}}
      onSubmit={handleSubmit}
    >
      <Badge
        badgeContent={
          <img style={{ width: "20px", height: "20px", marginTop: "15px"}} src={Upload} />
        }
      >
        <IconButton sx={{ display: "flex" }} component="label">
          <img
            style={{ width: "80px", height: "80px" }}
            src={AvatarPlaceholder}
            alt="Avatar Placeholder"
          ></img>
          <Input
            type="file"
            name="profileUrl"
            onChange={handleFileChange}
            inputProps={{ accept: "image/*" }}
            style={{ display: "none" }}
          />
        </IconButton>
      </Badge>
      <Box  
        sx={{
          width: "320px",
          border: "1px solid #D9D9D9",
          borderRadius: "8px",
          marginY: "20px",
          padding: "24px",
        }}
      >
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Nome
        </Typography>
        <TextField
          name="username"
          onChange={handleChange}
          placeholder="****************"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Email
        </Typography>
        <TextField
          name="email"
          onChange={handleChange}
          placeholder="****************"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
        <Typography sx={{ marginBottom: "5px" }}>Senha</Typography>
        <TextField
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="****************"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px" }}
        />
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Confirme sua senha
        </Typography>
        <TextField
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          placeholder="****************"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
        <Button
          type="submit"
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
        >
          Criar conta
        </Button>
      </Box>
    </Box>
  );
}
