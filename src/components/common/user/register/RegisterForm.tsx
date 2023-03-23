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
import { useFormik } from "formik" // email validation
import { basicSchema } from "../../../../schemas/validation";

type RegisterFormProps = {
	onLoginClick?: ()=>void
}

const RegisterForm: FC<RegisterFormProps> = ({
	onLoginClick
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // function handleSubmit(e: any) {
  //   e.preventDefault();

  //   if (password == confirmPassword) {
  //     console.log("Registering...");
  //     // send to backend
  //     fetch(`${REGISTER_URL}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         userid: userid,
  //         password: password,
  //         firstName: firstName,
  //         lastName: lastName,
  //         //email: email,
  //         //"address": address,
  //         birthday: birthday,
  //         admin: false,
  //       }),
  //     })
  //       .then(async (res) => {
  //         if (!res.ok) {
  //           throw await res.json();
  //         }

  //         return res.json().then((result) => {
  //           console.log("Register success!")
  //           console.log(result);
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("error occured ", error);
  //       });
  //   } else {
  //     console.log("Passwords do not match!");
  //   }
  // }

  // new form submission function
  const onSubmit = () => {
    console.log("Submitted");
  }
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthday: "",
      userid: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div // Form Contents
      style={{
        flexGrow: 1,
        backgroundColor: `white`,
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
                id="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className={errors.firstName && touched.firstName ? "input-error" : ""}
              />
              {errors.firstName && touched.firstName && <p style={{ fontSize: "50%", color: `red`, height: 0 }}>{ errors.firstName }</p>}
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Last Name"
                id="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                className={errors.lastName && touched.lastName ? "input-error" : ""}
              />
              {errors.lastName && touched.lastName && <p style={{ fontSize: "50%", color: `red`, height: 0 }}>{ errors.lastName }</p>}
						</Grid>
						<Grid item xs={12}>
              <TextField
                required
                type="date"
                label="Birthday"
                id="birthday"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.birthday}
                className={errors.birthday && touched.birthday ? "input-error" : ""}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {errors.birthday && touched.birthday && <p style={{ fontSize: "50%", color: `red`, height: 0 }}>{ errors.birthday }</p>}
            </Grid>
						<Grid item xs={6}>
              <TextField
                required
                label="Username"
                id="userid"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userid}
                className={errors.userid && touched.userid ? "input-error" : ""}
              />
              {errors.userid && touched.userid && <p style={{ fontSize: "50%", color: `red`, height: 0 }}>{ errors.userid }</p>}
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && <p style={{ fontSize: "50%", color: `red`, height: 0 }}>{ errors.email }</p>}
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={errors.password && touched.password ? "input-error" : ""}
              />
              {errors.password && touched.password && <p style={{ fontSize: "50%", color: `red`, height: 0 }}>{ errors.password }</p>}
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
              />
              {errors.confirmPassword && touched.confirmPassword && <p style={{ fontSize: "50%", color: `red`, height: 0 }}>{ errors.confirmPassword }</p>}
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
