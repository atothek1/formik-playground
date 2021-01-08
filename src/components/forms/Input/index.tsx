import { getIn, useFormikContext } from "formik";
import React from "react";
import { Label } from "../Label";
import { Col, Row } from "../../layout";
import { HelpIcon } from "../HelpIcon";
import { BasicInputProps, InputType } from "../types";
import { ErrorIcon } from "../ErrorIcon";
import { ErrorText } from "../ErrorText";
import { StyledField } from "./styled";
import { renderInputField } from "./utils";
import { Submit } from "../Submit";
import { SelectProps } from "../Select";
import { ArrayinputProps } from "../Arrayinput";
import { NumberProps } from "../Number";

interface InputProps extends BasicInputProps {
  readonly type?: InputType;
}

export function Input({
  label,
  name,
  type = InputType.TEXT,
  isDisabled = false,
  isRequired = false,
  helpText,
  children,
  ...restProps
}: InputProps) {
  const { errors, touched } = useFormikContext();

  const errorText = getIn(errors, name);
  const hasLabel = label !== undefined && label.length > 0;
  const hasHelp = helpText !== undefined;
  const hasError =
    errorText !== undefined &&
    typeof errorText === "string" &&
    getIn(touched, name);
  const id = name;
  const iconElement =
    hasHelp && !hasError ? (
      <HelpIcon title={helpText} />
    ) : hasError ? (
      <ErrorIcon title={errorText} />
    ) : null;

  const errorElement = hasError ? (
    <Row padding="0 0.4rem 0.4rem 0">
      <ErrorText>{errorText}</ErrorText>
    </Row>
  ) : null;

  const labelElement = hasLabel ? (
    <Row
      justifyContent="space-between"
      alignItems="center"
      padding="0 0 0.4rem 0"
    >
      <Label htmlFor={id}>
        {label}
        {isRequired && " *"}
      </Label>
      {iconElement}
    </Row>
  ) : null;

  return (
    <StyledField hasError={hasError}>
      {labelElement}
      {renderInputField(name, id, type, restProps, isDisabled, children)}
      {errorElement}
    </StyledField>
  );
}

Input.Textinput = (props: InputProps) => (
  <Input {...props} type={InputType.TEXT} />
);

Input.Textarea = (props: InputProps) => (
  <Input {...props} type={InputType.TEXTAREA} />
);

Input.Checkbox = (props: InputProps) => (
  <Input {...props} type={InputType.CHECKBOX} />
);

Input.Select = (props: SelectProps) => (
  <Input {...props} type={InputType.SELECT} />
);

Input.Switch = (props: InputProps) => (
  <Input {...props} type={InputType.SWITCH} />
);

Input.Number = (props: NumberProps) => (
  <Input {...props} type={InputType.NUMBER} />
);

Input.Arrayinput = (props: ArrayinputProps) => (
  <Input {...props} type={InputType.ARRAY} />
);

Input.Submit = ({
  label,
  children
}: {
  readonly label?: string;
  readonly children?: React.ReactNode;
}) => <Submit>{children || label}</Submit>;
