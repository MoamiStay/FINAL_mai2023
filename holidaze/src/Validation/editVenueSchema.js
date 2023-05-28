import * as yup from "yup";

export const editVenueSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .required(),
  description: yup.string().trim().required(),
  media: yup.array().required(),
  price: yup
    .number(Number, "Please insert a number")
    .min(0, "Price can't be lower than 0")
    .max(10000, "Price caps at 10 000 NOK")
    .required(),
  maxGuests: yup
    .number(Number, "Please insert a number")
    .max(100, "Maximum amount of guests is limited to 100")
    .required(),
  rating: yup
    .number()
    .min(0, "Rating must be between 0 and 5")
    .max(5, "Rating must be between 0 and 5")
    .required(),
});
