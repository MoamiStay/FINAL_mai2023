import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().trim().min(3, "Username must be at least 3 characters"),
  email: yup
    .string()
    .trim()
    .matches(
      "^[A-Za-z0-9._%+-]+@noroff.no$",
      "Email must be an @noroff.no email"
    ),
  password: yup.string().trim().min(7),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Password do not match"),
});
