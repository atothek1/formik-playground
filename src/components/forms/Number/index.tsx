import { BasicInputProps } from "../types";
import React, { useCallback, useState, createRef } from "react";
import { StyledNumber, StyledNumberInput, StyledNumberButton } from "./styled";
import { useField } from "formik";

export interface NumberProps extends BasicInputProps {
  readonly min?: number;
  readonly max?: number;
  readonly step?: number;
}

export function Number(props: NumberProps) {
  const { isDisabled, label, ...rest } = props;
  const inputRef = React.useRef<HTMLInputElement>();
  const [field, meta, helpers] = useField<number>(rest);

  const inputProps = {
    disabled: isDisabled,
    ...field,
    type: "number"
  };
  const increment = useCallback(() => {
    inputRef.current?.focus();
    helpers.setTouched(true);
    helpers.setValue(field.value ? field.value + 1 : 1, true);
  }, [field, helpers]);
  const decrement = useCallback(() => {
    inputRef.current?.focus();
    helpers.setTouched(true);
    helpers.setValue(field.value ? field.value - 1 : 0, true);
  }, [field, helpers]);
  return (
    <StyledNumber>
      <StyledNumberInput ref={inputRef} {...inputProps} />
      <div>
        <StyledNumberButton type="inc" onClick={increment}>
          +
        </StyledNumberButton>
        <StyledNumberButton type="dec" onClick={decrement}>
          -
        </StyledNumberButton>
      </div>
    </StyledNumber>
  );
}
