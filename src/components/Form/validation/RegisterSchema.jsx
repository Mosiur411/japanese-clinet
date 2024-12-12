import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    name: yup.string().required("Name field is required"),
    profilePhoto: yup.string().required("profilePhoto field is required"), 
    email: yup
        .string()
        .required("Email field is required")
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Please type a valid email address"
        ),
    password: yup
        .string()
        .required("Password field is required.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/,
            "Please choose a stronger password. Try a mix of letters using a blend of upper & lower case, numbers, and symbols."
        ),
        confirmPassword: yup
        .string()
        .required("Confirm password field is required.")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
       
});