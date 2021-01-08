import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { StyledForm } from "./styled";

interface FormProps {
  readonly children?: React.ReactNode;
}

function createChangeLog(values, initialValues) {
  const diffs = [];
  if (!values) {
    return diffs;
  }
  Object.keys(values).forEach((key) => {
    if (values[key] && initialValues[key] === undefined) {
      diffs.push({
        action: "added",
        key,
        newValue: values[key],
        oldValue: undefined
      });
    } else if (values[key] !== initialValues[key]) {
      diffs.push({
        action: "changed",
        key,
        newValue: values[key],
        oldValue: initialValues[key]
      });
    } else if (initialValues[key] && values[key] === undefined) {
      diffs.push({
        action: "deleted",
        key,
        newValue: undefined,
        oldValue: initialValues[key]
      });
    }
  });
  return diffs;
}
export function Form({ children }: FormProps) {
  const { values, initialValues } = useFormikContext();
  const [diffState, setDiffState] = useState(initialValues);
  useEffect(() => {
    const diff = createChangeLog(values, initialValues);
    console.log(diff);
    setDiffState(diff);
  }, [values, initialValues]);
  return <StyledForm>{children}</StyledForm>;
}
