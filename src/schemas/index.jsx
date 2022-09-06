import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  address: Yup.string().min(20).required("Please enter your address"),
  mobile: Yup.string().min(10).required("Please enter your mobile no.")
});
