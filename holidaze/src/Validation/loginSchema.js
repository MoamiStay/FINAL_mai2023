import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(
      "^[A-Za-z0-9._%+-]+@noroff.no$",
      "Email must be an @noroff.no email"
    ),
  password: yup.string().trim().min(7),
});
