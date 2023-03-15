import { SX_MASKS } from "@/components/common/masks";
import { REGISTER_URL } from "@/components/common/urls";
import { Box, Button, Container, Grid, Snackbar, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { COLOR_PALLETE } from "../ThemeProvider";



const RegisterForm: FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [userid, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(e: any) {
        e.preventDefault();
        if (password == confirmPassword) {
            console.log("Registering...");

            fetch(`${REGISTER_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    "userid": userid,
                    "password": password,
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    //"address": address,
                    "birthday": birthday,
                    "admin": false,
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

        } else {
            console.log("Passwords do not match!");
        }
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
                        Registration
                    </Typography>

                    <form className="registerForm" onSubmit={handleSubmit}>
                        <Grid container spacing={5} sx={{
                            marginTop: "0%",
                        }}>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="First Name"
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="Last Name"
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    label="Email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    type="date"
                                    label="Birthday"
                                    onChange={e => setBirthday(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="Username"
                                    onChange={e => setUserId(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="Password"
                                    type="password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    label="Confirm Password"
                                    type="password"
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                >
                                    Register!
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        </Box>
    )
}

export default RegisterForm;