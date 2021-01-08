import React from "react";
import { FieldArray } from "formik";
import { BasicInputProps } from "../types";
import { createFieldArrayRenderer } from "./utils";
import { ArrayinputActions, ItemComponentTypeProps } from "./types";
import { useArrayinputActions } from "./hooks";

export interface ArrayinputProps extends BasicInputProps {
  readonly component: React.ComponentType<ItemComponentTypeProps>;
  readonly actions?: React.MutableRefObject<ArrayinputActions>;
}

export function Arrayinput({
  component: itemComponentType,
  actions,
  name,
  ...props
}: ArrayinputProps) {
  const { renderer } = createFieldArrayRenderer(itemComponentType, actions);
  return <FieldArray name={name}>{renderer}</FieldArray>;
}

export { ArrayinputActions, ItemComponentTypeProps, useArrayinputActions };
