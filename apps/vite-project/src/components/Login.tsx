import { Box, Typography, TextField, Button } from "@mui/material";
export default function Login() {
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
      <div id="inputs">
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Email
        </Typography>
        <TextField
          placeholder="*******"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
        <Typography sx={{ marginBottom: "5px" }}>Senha</Typography>
        <TextField
          placeholder="*******"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px" }}
        />
      </div>
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
        >
          Entrar
        </Button>
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
      </Box>
    </Box>
  );
}
