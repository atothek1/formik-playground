import * as yup from "yup";
import { schema as fixDiscountSchema } from "../../containers/FixDiscountElement/schema";
export const schema = yup.object({
  fixDiscounts: yup.array().of(fixDiscountSchema)
});
