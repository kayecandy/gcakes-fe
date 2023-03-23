import * as yup from "yup";

/* Minimum of 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit */
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Required!"),
    lastName: yup
        .string()
        .required("Required!"),
    email: yup
        .string()
        .email("Invalid email detected! Please re-enter your email")
        .required("Required!"),
    birthday: yup
        .string()
        .required("Required!"),
    userid: yup
        .string()
        .required("Required!"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Weak password! Password must contain atleast (5) characters, 1 upper case letter, 1 lower case letter, and 1 numeric digit" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], "Passwords do not match!"),
})