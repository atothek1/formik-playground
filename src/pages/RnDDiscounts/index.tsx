import React, { useCallback } from "react";
import { Formik } from "formik";
import { InputForm } from "./form";
import { schema } from "./schema";
import { useFetchRnDDiscounts, useSubmitRnDDiscounts } from "../../services";

export function RnDDiscounts() {
  const { data, loading: isLoading } = useFetchRnDDiscounts();
  const [submit, submitStatus] = useSubmitRnDDiscounts();

  const submitHandler = useCallback(
    (values) => {
      submit(values);
    },
    [submit]
  );

  if (isLoading || submitStatus.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Formik
      initialValues={data}
      onSubmit={submitHandler}
      validationSchema={schema}
      validateOnMount
      validateOnChange
    >
      <InputForm />
    </Formik>
  );
}
