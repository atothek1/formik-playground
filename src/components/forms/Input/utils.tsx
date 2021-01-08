import React from "react";
import { InputType } from "../types";
import { Textinput } from "../Textinput";
import { Textarea } from "../Textarea";
import { Checkbox } from "../Checkbox";
import { Select } from "../Select";
import { Switch } from "../Switch";
import { Number } from "../Number";
import { Arrayinput } from "../Arrayinput";

export function renderInputField(
  name: string,
  id: string,
  type: InputType,
  fieldProps: any,
  isDisabled = false,
  children?: React.ReactNode
) {
  if (children) {
    return children;
  }

  const inputProps = { name, id, disabled: isDisabled, "data-testid": name };

  switch (type) {
    case InputType.TEXT:
      return <Textinput {...inputProps} />;
    case InputType.TEXTAREA:
      return <Textarea {...inputProps} />;
    case InputType.CHECKBOX:
      return <Checkbox {...inputProps} />;
    case InputType.SWITCH:
      return <Switch {...inputProps} />;
    case InputType.NUMBER:
      return (
        <Number
          label=""
          {...inputProps}
          min={fieldProps.min}
          max={fieldProps.max}
          step={fieldProps.step}
        />
      );
    case InputType.ARRAY:
      return (
        <Arrayinput
          label=""
          {...inputProps}
          component={fieldProps.component}
          actions={fieldProps.actions}
        />
      );
    case InputType.SELECT:
      return <Select label="" {...inputProps} options={fieldProps.options} />;
  }
}
