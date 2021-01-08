import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .transform((v) => v.trim())
    .required("Please provide a Firstname."),
  lastName: yup
    .string()
    .transform((v) => v.trim())
    .required("Please provide a Lastname."),
  notes: yup
    .string()
    .transform((v) => v.trim())
    .required("Please provide some account notes."),
  isAdmin: yup
    .mixed()
    .test("is-true", "Please select a valid Country.", (v) => v === true),
  country: yup
    .mixed()
    .test("not-null", "Please select a valid Country.", (v) => v !== null)
});
