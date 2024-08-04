import { Box } from "@mui/material";

type SidebarRow = {
  image: string;
  title: string;
};

export default function SidebarRow({ image, title }: SidebarRow) {
  return (
    <Box
      component="span"
      sx={{
        px: 1.5,
        width: 1,
        height: "100%",
        minHeight: "20px",
        backdropFilter: "blur(5)",
        backgroundColor: "#00851080",
      }}
    >
      <Box
        component={"img"}
        src={image}
        sx={{ justifyContent: "flex-start" }}
      />
      <Box component={"span"} sx={{ alignItems: "center" }}>
        {title}
      </Box>
    </Box>
  );
}
