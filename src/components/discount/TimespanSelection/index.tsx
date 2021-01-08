import React from "react";
import { Row, Input } from "../../index";
export interface TimespanSelectionProps {
  readonly labels: { readonly from: string; readonly to: string };
  readonly names: { readonly from: string; readonly to: string };
  readonly isRequired: { readonly from: boolean; readonly to: boolean };
}
export function TimespanSelection(props: TimespanSelectionProps) {
  const {
    labels: { from: labelFrom, to: labelTo },
    names: { from: nameFrom, to: nameTo },
    isRequired: { from: isReqFrom, to: isReqTo }
  } = props;
  return (
    <Row>
      <Input.Textinput
        label={labelFrom}
        name={nameFrom}
        isRequired={isReqFrom}
      />
      <Input.Textinput label={labelTo} name={nameTo} isRequired={isReqTo} />
    </Row>
  );
}
