import { Box, Stack, IconButton, TextField } from "@mui/material";
import NavPublish from "./NavPublish";
import { useRef, useState } from "react";
import createPost from "../services/Posts/CreatePost";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Arquivo selecionado:", selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file && description) {
      const formData = new FormData();
      formData.append("Image", file);
      formData.append("Description", description);

      try {
        await createPost(formData);
        console.log("Post criado com sucesso");
        navigate('/Home')
      } catch (error) {
        console.error("Erro ao criar o post:", error);
      }
    } else {
      console.log("Por favor, selecione um arquivo e adicione uma descrição.");
    }
  };

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
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{ width: "100%", minHeight: 1 }}
          multiline={true}
          placeholder="Conteúdo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Box sx={{ px: "10px", m: 0, height: 1 }}>
          <Stack sx={{ justifyContent: "space-between" }} direction="row">
            <Box>
              <Box>
                <IconButton onClick={handleButtonClick}>
                  <img src="./src/assets/upload.svg" alt="Upload" />
                </IconButton>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  accept="image/*"
                />
              </Box>
              <IconButton>
                <img src="./src/assets/globe.svg" />
              </IconButton>
              <IconButton>
                <img src="./src/assets/location.svg" />
              </IconButton>
            </Box>
            <IconButton type="submit">
              <img src="./src/assets/send.svg" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
