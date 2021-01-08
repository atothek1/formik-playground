import React, { useState, useCallback } from "react";
import { useField } from "formik";
import {
  StyledSelect,
  StyledSelectContainer,
  StyledOption,
  StyledOptionContainer
} from "./styled";
import { BasicInputProps, SelectOption } from "../types";

export interface SelectProps extends BasicInputProps {
  readonly options: ReadonlyArray<SelectOption>;
}

function renderOptions(
  name: string,
  options: ReadonlyArray<SelectOption>,
  callback: (e: string | null) => void
) {
  const optionElements = options.map(({ value, label }) => {
    const key = name + "#" + value;
    return (
      <StyledOption
        key={key}
        alignItems="center"
        value={value}
        onClick={() => callback(value)}
      >
        {label}
      </StyledOption>
    );
  });
  return <StyledOptionContainer>{optionElements}</StyledOptionContainer>;
}

export function Select(props: SelectProps) {
  const { name, options, isDisabled, label, ...rest } = props;
  const inputProps = { disabled: isDisabled, ...rest };
  const [field, meta, helpers] = useField({ name, ...rest });
  const [isOpen, setIsOpen] = useState(false);

  const selectClickHandler = useCallback(
    (event) => {
      event.preventDefault();
      helpers.setTouched(true);
      setIsOpen(!isOpen);
    },
    [isOpen, setIsOpen, helpers]
  );
  const optionClickHandler = useCallback(
    (value) => {
      setIsOpen(false);
      helpers.setValue(value);
    },
    [helpers, setIsOpen]
  );

  const selectedOption =
    options.find((opt) => {
      return opt.value === field.value;
    }) || options[0];

  const selectedElement = (
    <StyledOption value={selectedOption.value}>
      {selectedOption.label}
    </StyledOption>
  );

  return (
    <StyledSelectContainer>
      <StyledSelect
        {...inputProps}
        isOpen={isOpen}
        onClick={selectClickHandler}
      >
        {selectedElement}
      </StyledSelect>
      {isOpen && renderOptions(name, options, optionClickHandler)}
    </StyledSelectContainer>
  );
}
