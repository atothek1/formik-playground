import React, { useCallback, useRef } from "react";
import { Button, Input, ArrayinputActions, Grid, Row } from "../../components";
import { DiscountScaleItem } from "../../types";
import { DiscountScalesElement } from "../DiscountScalesElement";

const createDiscountScaleItem = (): DiscountScaleItem => ({
  from: 0,
  percentage: 0
});

interface DiscountScalesProps {
  readonly name: string;
}
export function DiscountScales({ name }: DiscountScalesProps) {
  const actions = useRef<ArrayinputActions<DiscountScaleItem>>({
    push() {
      return createDiscountScaleItem();
    }
  });

  const handleAddScale = useCallback(
    (e) => {
      e.preventDefault();
      if (actions.current.push) {
        actions.current.push();
      }
    },
    [actions]
  );

  return (
    <Grid>
      <Row>
        <Input.Arrayinput
          name={name}
          label="Staffeln:"
          actions={actions}
          component={DiscountScalesElement}
        />
      </Row>
      <Row>
        <Button onClick={handleAddScale}>+</Button>
      </Row>
    </Grid>
  );
}
