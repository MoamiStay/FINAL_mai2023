import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().trim().min(3).required(),
  email: yup.string().trim().min(3).required(),
  avatar: yup.string().trim().min(3),
  // venueManager: yup.string().trim().min(3).required(),
  password: yup.string().trim().min(8).required(),
});
