import React from "react";
import { Row, Input } from "../../components";
import { ItemComponentTypeProps } from "../../components/forms/Arrayinput/types";
import { Discount, DiscountScale } from "./types";

function DiscountScaleItem({
  namePrefix
}: ItemComponentTypeProps<DiscountScale>) {
  return (
    <Row>
      <Input.Textinput label="From" name={namePrefix("from")} />
      <Input.Textinput label="Value" name={namePrefix("value")} />
    </Row>
  );
}

export function DiscountItem({ namePrefix }: ItemComponentTypeProps<Discount>) {
  return (
    <Row>
      <Input.Textinput label="From" name={namePrefix("from")} />
      <Input.Textinput label="Until" name={namePrefix("until")} />
      <Input.Number label="Value" name={namePrefix("value")} />
      <Input.Arrayinput
        label="Scales"
        name={namePrefix("scales")}
        component={DiscountScaleItem}
      />
    </Row>
  );
}
