import { SX_MASKS } from "@/components/common/util/masks";
import { REGISTER_URL } from "@/components/common/util/urls";
import {
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { COLOR_PALLETE } from "../../ThemeProvider";

type RegisterFormProps = {
	onLoginClick?: ()=>void
}

const RegisterForm: FC<RegisterFormProps> = ({
	onLoginClick
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (password == confirmPassword) {
      console.log("Registering...");
      // send to backend
      fetch(`${REGISTER_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userid: userid,
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email,
          //"address": address,
          //"birthday": birthday,
          admin: false,
        }),
      })
        .then(async (res) => {
          if (!res.ok) {
            throw await res.json();
          }

          return res.json().then((result) => {
            console.log(result);
          });
        })
        .catch((error) => {
          console.log("error occured ", error);
        });
    } else {
      console.log("Passwords do not match!");
    }
  }

  /** NOTICE:
   *  Ignore error messages on the TextFields
   */

  return (
    <div // Form Contents
      style={{
        flexGrow: 1,
        backgroundColor: `white`,
        // paddingBottom: "3vw",
        borderRadius: "2rem",
        borderWidth: "5px",
        borderColor: COLOR_PALLETE[4],
				borderStyle: "solid",
				overflow: "hidden"
      }}
    >
      <Box
        sx={{
          backgroundColor: COLOR_PALLETE[4],
          textAlign: "center",
          ...SX_MASKS[0]("bottom"),
          pt: 2,
          pb: 7,
          mb: "1px",
          WebkitMaskSize: "240%",
        }}
      >
        <Typography
          sx={{ fontWeight: "700" }}
          variant="h2"
          color={COLOR_PALLETE[2]}
        >
          Registration
        </Typography>
      </Box>
      <Container
        sx={{
          textAlign: "center",
          pb: 5,
        }}
        maxWidth="sm"
      >

        <form className="registerForm" onSubmit={handleSubmit}>
          <Grid
            container
            spacing={5}
            sx={{
							marginTop: "0%",
							"& .MuiFormControl-root": {
								width: "100%"
							}
						}}
						columnSpacing={1}
          >
            <Grid item xs={6}>
              <TextField
                required
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
						</Grid>
						<Grid item xs={12}>
              <TextField
                type="date"
                label="Birthday"
                onChange={(e) => setBirthday(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
						<Grid item xs={6}>
              <TextField
                required
                label="Username"
                onChange={(e) => setUserId(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            
            
            <Grid item xs={6}>
              <TextField
                required
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Confirm Password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
							<Button sx={{
								width: "100%",
							}} variant="contained" type="submit" size="large">
                Register!
              </Button>
            </Grid>
          </Grid>
				</form>
				<Box sx={{
					height: 15
				}}></Box>

        <Grid container>
          <Grid item xs={12}>
            <Typography
              sx={{ mt: 3}}
              variant="subtitle1"
              color={"GrayText"}
            >
              Already have an account?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              href="#"
              color="secondary"
              sx={{
                width: "100%",
							}}
							onClick={onLoginClick}
            >
              Login Now!
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RegisterForm;
