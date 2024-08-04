import { Box, Typography, Avatar, Stack, IconButton, Button } from "@mui/material";
import LeafUpvote from "../assets/LeafUpvote.svg";
import SaveIcon from "../assets/Save.svg";
import { useState } from "react";
import upVote from "../services/Posts/UpVote";

interface PostProps {
  id: string;
  postUrl: string;
  description: string;
  author: string;
  authorUrl: string;
}

export default function Posts({ id, postUrl, description, author, authorUrl }: PostProps) {
  const [voted, setVoted] = useState(false);
  const [expanded, setExpanded] = useState(false);


  const handleUpvote = async () => {
    try {
      await upVote(id);
      setVoted(true);
      console.log("Post upvoted successfully");
    } catch (error) {
      console.error("Failed to upvote post:", error);
    }
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedDescription = description.length > 100 && !expanded
    ? `${description.substring(0, 100)}...`
    : description;


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
            src={authorUrl}
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
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
          {truncatedDescription}
        </Typography>
        {description.length > 100 && (
          <Button onClick={handleToggleExpand} sx={{ mt: 0.4 }}>
            {expanded ? "Ler menos" : "Ler mais"}
          </Button>
        )}
      </Box>
      <Box>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <IconButton onClick={handleUpvote}>
            <Box
              component={"img"}
              style={{ width: "50.37px", height: "53px" }}
              src={LeafUpvote}
              alt="Upvote"
              sx={{
                width: "50.37px",
                height: "53px",
                color: voted ? "#00FF00" : "inherit", // Change color to green if voted
                "& path": { fill: voted ? "#00FF00" : "inherit" } // Ensure that the fill color changes
              }}
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