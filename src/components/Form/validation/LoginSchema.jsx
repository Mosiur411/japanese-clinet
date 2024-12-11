import * as yup from "yup";
// Form Retailer schema
export const LoginSchema = yup.object().shape({
    email: yup.string().required("Email field is required").matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Please type a valid email address"
    ),
    password: yup.string()
        .required("Password field is required.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/,
            "Please choose a stronger password. Try a mix of letters using a blend of upper & lower case, numbers, and symbols."
        ),
});

