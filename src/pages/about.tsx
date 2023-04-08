import { AboutBody, AboutFoot, AboutHead } from "@/components/page/about/AboutContent";
import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { Box, Container, Typography } from "@mui/material";

export default function AboutPage() {
    return (
        <Box // Background
            sx={{
                position: "relative",
                mt: 15,
                //display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // alignContent: "center",
                backgroundColor: `${COLOR_PALLETE[0]}C0`,
            }}
        >
            <Container // outer contents
                sx={{
                    maxWidth: "md",
                    padding: 10,
                }}
            >
                <Typography
                    sx={{
                        mb: 3,
                    }}
                    variant="h2"
                >
                    About Gina
                </Typography>

                <div    // inner contents
                    style={{
                        flexGrow: 1,
                        padding: 25,
                        backgroundColor: `white`,
                        borderRadius: "2rem",
                        borderWidth: "5px",
                        borderColor: `${COLOR_PALLETE[2]}`,
                        borderStyle: "solid",
                    }}
                >
                    <AboutHead />
                    <hr />
                    <AboutBody />
                    <hr />
                    <AboutFoot />
                </div>

            </Container>

        </Box>
    )
}