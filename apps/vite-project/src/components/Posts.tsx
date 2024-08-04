import { Box, Typography, Avatar, Stack, IconButton } from "@mui/material";
import LeafUpvote from "../assets/LeafUpvote.svg";
import SaveIcon from "../assets/Save.svg";

interface PostProps {
  postUrl: string;
  description: string;
  author: string;
}

export default function Posts({ postUrl, author }: PostProps) {

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "380px",
        minHeight: "350px",
        padding: "0px 20px 0px 20px",
        margin: "0 auto",
        mb: 2
      }}
    >
      <Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", my: "5px" }}
        >
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
              border: "2px solid",
              borderColor: "primary.main",
            }}
          />
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
          {author}
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F1F1F1",
          height: "300px",
          my: "8px",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={postUrl}
          alt="Post"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
        </Box>
      </Box>
      <Box>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <IconButton>
            <Box
              component={"img"}
              style={{ width: "50.37px", height: "53px" }}
              src={LeafUpvote}
            />
          </IconButton>
          <Box>
            <IconButton>
              <Box component={"img"} style={{ width: "39px" }} src={SaveIcon} />
            </IconButton>
            <IconButton>
              <Box
                component={"img"}
                style={{ width: "29.51px", height: "35.55px" }}
                src="./src/assets/chat.png"
              />
            </IconButton>
            <IconButton>
              <Box
                component={"img"}
                style={{ width: "30.72px", height: "32.64px" }}
                src="./src/assets/share.png"
                alt="Share"
              />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
