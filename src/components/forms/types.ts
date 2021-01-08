import React from "react";

export enum InputType {
  TEXT = "text",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  SELECT = "select",
  SWITCH = "switch",
  NUMBER = "number",
  ARRAY = "array"
}

export interface BasicInputProps {
  readonly label?: string;
  readonly inlineLabel?: boolean;
  readonly name: string;
  readonly isDisabled?: boolean;
  readonly isRequired?: boolean;
  readonly helpText?: string;
  readonly children?: React.ReactNode;
}

export interface SelectOption {
  readonly label: string;
  readonly value: string | null;
}
