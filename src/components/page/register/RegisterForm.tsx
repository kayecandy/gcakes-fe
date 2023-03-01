import { SX_MASKS } from "@/components/common/masks";
import { Box, Button, Container, Grid, Snackbar, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { COLOR_PALLETE } from "../ThemeProvider";

const RegisterForm: FC = () => {
    return (
        <Box    // Background
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
                padding: "25%",
                height: "120vh",
                zIndex: 0,
            }}
        >
            <div    // Form Contents
                style={{
                    flexGrow: 1,
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

                    <Grid container spacing={5} sx={{
                        marginTop: "0%",
                    }}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="First Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Last Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                error
                                label="Birthday"
                                helperText="Disabled"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Username"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Password"
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Confirm Password"
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button>Register!</Button>
                        </Grid>
                    </Grid>

                    <Typography
                        variant="body1"
                        sx={{
                            lineHeight: "150%",
                            letterSpacing: "1px",
                        }}
                    >
                    </Typography>
                </Container>
            </div>
        </Box>
    )
}

export default RegisterForm;