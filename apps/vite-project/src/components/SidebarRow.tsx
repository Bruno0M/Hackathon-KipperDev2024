import { Box, Typography } from "@mui/material";

type SidebarRow = {
  image: string;
  title: string;
};

export default function SidebarRow({ image, title }: SidebarRow) {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 0.7,
        width: 1,
        display: "flex",
        minHeight: "20px",
        backdropFilter: "blur(5)",
        backgroundColor: "#00851080",
      }}
    >
      <Box
        component={"img"}
        src={image}
        sx={{ justifyContent: "flex-start", py: 1, width: 48 }}
      />
      <Typography
        sx={{
          pl: 2,
          height: 1,
          m: "auto 0",
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
