import * as yup from "yup";

export const schema = yup.object().shape({
  validFrom: yup.date().required("Please provide a valid start date."),
  validTo: yup.date().required("Please provide a valid end date."),
  percentage: yup
    .number()
    .min(1, "Must be between 1 and 10")
    .max(10, "Must be between 1 and 10")
    .required("Missing Percentage")
});
