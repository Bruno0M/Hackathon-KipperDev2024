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
        display: "flex",
        minHeight: "20px",
        backdropFilter: "blur(5)",
        backgroundColor: "#00851080",
      }}
    >
      <Box
        component={"img"}
        src={image}
        sx={{ justifyContent: "flex-start", py: 1 }}
      />
      <Box
        component={"span"}
        sx={{
          height: 1,
          alignItems: "center",
          textAlign: "center",
          verticalAlign: "center",
          justifyItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {title}
      </Box>
    </Box>
  );
}
