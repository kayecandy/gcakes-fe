import { SX_MASKS } from "@/components/common/masks";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { COLOR_PALLETE } from "../ThemeProvider";

const RegisterForm: FC = () => {
    return (
        <Box
            sx={{
                ...SX_MASKS[1]("bottom"),
                position: "relative",
                overflow: "hidden",
                backgroundColor: "white",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "right",
                backgroundPositionY: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                height: "80vh",
                zIndex: 0,
            }}
        >
            <div
                style={{
                    // flexGrow: 1,
                    backgroundColor: `${COLOR_PALLETE[0]}C0`,
                    // paddingBottom: "3vw",
                    borderRadius: "2rem",
                    borderWidth: "5px",
                    borderColor: COLOR_PALLETE[1],
                    borderStyle: "solid",
                }}
            >
                <Container
                    sx={{
                        textAlign: "center",
                        pb: 10,
                    }}
                    maxWidth="sm"
                >
                    <Typography
                        sx={{ mt: 3, fontWeight: "700" }}
                        variant="h2"
                        color={COLOR_PALLETE[1]}
                    >
                        Registeration
                    </Typography>

                    <Box sx={{ py: 2 }}></Box>

                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: "150%",
                            letterSpacing: "1px",
                        }}
                    >
                        Hello World!
                    </Typography>
                </Container>
            </div>
        </Box>
    )
}

export default RegisterForm;