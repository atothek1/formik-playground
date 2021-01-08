import React, { useCallback } from "react";
import {
  Grid,
  Input,
  ItemComponentTypeProps,
  Row,
  Button
} from "../../components";
import { DiscountScaleItem } from "../../types";
interface DiscountScalesElementProps
  extends ItemComponentTypeProps<DiscountScaleItem> {}
export function DiscountScalesElement({
  namePrefix,
  data,
  index,
  helper
}: DiscountScalesElementProps) {
  const handleRemove = useCallback(
    (e) => {
      e.preventDefault();
      helper.remove(index);
    },
    [index, helper]
  );

  return (
    <Grid>
      <Row>
        <Input.Number label="Ab:" name={namePrefix("from")} isRequired />
        <Input.Number
          label="Wert:"
          name={namePrefix("percentage")}
          inlineLabel
          isRequired
        />
        <Button onClick={handleRemove}>-</Button>
      </Row>
    </Grid>
  );
}
