import * as yup from "yup";

export const createVenueSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .required(),
  description: yup.string().trim(),
  // media: yup.array(),
  price: yup.number().min(0, "Price can't be lower than 0").required(),
  maxGuests: yup
    .number()
    .max(100, "Maximum amount of guests is limited to 100"),
  rating: yup
    .number()
    .min(0, "Rating must be between 0 and 5")
    .max(5, "Rating must be between 0 and 5"),
});
