import React from "react";
import { Formik } from "formik";
import { InputForm } from "./form";
import { schema } from "./schema";
import { SelectOption } from "../../components";

interface TestFormProps {
  readonly values: any;
  readonly onSubmit: (values: any) => void;
  readonly countries: SelectOption[];
}
export function TestForm({ values, onSubmit, countries }: TestFormProps) {
  return (
    <>
      <Formik
        initialValues={values}
        onSubmit={onSubmit}
        validationSchema={schema}
        validateOnMount
        validateOnChange
      >
        <InputForm countryOptions={countries} />
      </Formik>
    </>
  );
}
