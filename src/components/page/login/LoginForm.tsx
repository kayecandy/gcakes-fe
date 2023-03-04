import { SX_MASKS } from "@/components/common/masks";
import { LOGIN_URL } from "@/components/common/urls";
import { Box, Button, Container, createTheme, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import { COLOR_PALLETE } from "../ThemeProvider";

/*
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        apple: createColor('#5DBA40'),
        steelBlue: createColor('#5C76B7'),
        violet: createColor('#BC00A3'),
    },
});
declare module '@mui/material/styles' {
    interface CustomPalette {
        anger: PaletteColorOptions;
        apple: PaletteColorOptions;
        steelBlue: PaletteColorOptions;
        violet: PaletteColorOptions;
    }
    interface Palette extends CustomPalette { }
    interface PaletteOptions extends CustomPalette { }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        anger: true;
        apple: true;
        steelBlue: true;
        violet: true;
    }
}
*/

const LoginForm: FC = () => {
    const [userid, setUserId] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e: any) {
        e.preventDefault();
        console.log("Logging In...");
        console.log("userid: ", userid);
        console.log("password: ", password);

        fetch(`${LOGIN_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                "userid": userid,
                "password": password,
            })
        })
            .then(async (res) => {
                if (!res.ok) {
                    throw await res.json();
                }

                return res.json().then((result) => {
                    console.log(result);

                })
            })
            .catch((error) => {
                console.log("error occured ", error);
            })
    }

    return (
        <Box    // Background
            sx={{
                ...SX_MASKS[1]("bottom"),
                position: "relative",
                overflow: "hidden",
                backgroundColor: `${COLOR_PALLETE[0]}C0`,
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
                    backgroundColor: `white`,
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
                        Login!
                    </Typography>

                    <form className="loginForm" onSubmit={handleLogin}>
                        <Grid container
                            spacing={5}
                            sx={{
                                marginTop: "0%"
                            }}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Username"
                                    onChange={e => setUserId(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    type="password"
                                    label="Password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography
                                sx={{ mt: 3, fontWeight: "700" }}
                                variant="subtitle1"
                                color={COLOR_PALLETE[1]}
                            >
                                Do not have an account yet?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                type="submit"
                                href="/register"
                                color="success"
                            >
                                Register Now!
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Box>
    )
}

export default LoginForm;