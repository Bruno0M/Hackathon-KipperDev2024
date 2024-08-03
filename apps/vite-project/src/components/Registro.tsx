import { Box, Typography, TextField, Button } from "@mui/material";
export default function Registro() {
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
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Email
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px", color: "#1E1E1E" }}
        />
        <Typography sx={{ marginBottom: "5px" }}>Senha</Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginBottom: "24px" }}
        />
        <Typography sx={{ marginBottom: "5px", color: "#1E1E1E" }}>
          Confirme sua senha
        </Typography>
        <TextField
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
            }
          }}
          variant="outlined"
        >
          Criar conta
        </Button>
      </Box>
    </Box>
  );
}
