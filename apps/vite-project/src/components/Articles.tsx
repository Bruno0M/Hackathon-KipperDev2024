import { Box, Typography } from "@mui/material";
import UserData from "./Header";

export default function Articles() {
    return (
        <>
            <UserData/>
            <Box sx={{ backgroundColor: "#EFEBE7", padding: "0px 20px 0px 20px"}}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis praesentium consequuntur eligendi expedita dicta labore consequatur. Corporis blanditiis iure corrupti praesentium nihil rerum sed repellat, culpa reprehenderit necessitatibus dolor ullam!
                </Typography>

            </Box>
        </>
    );
}