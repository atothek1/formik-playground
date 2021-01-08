import React, { useCallback, useRef } from "react";
import {
  Form,
  Row,
  Input,
  Section,
  Col,
  Button,
  useArrayinputActions
} from "../../components";
import { FixDiscountElement, RnDScaleDiscountElement } from "../../containers";
import { FixDiscount, RnDScaleDiscount } from "../../types";

interface InputFormProps {}

const createFixDiscount = (): FixDiscount => ({
  validFrom: new Date(),
  validTo: new Date(),
  percentage: 1
});

const createScaleDiscount = (): RnDScaleDiscount => ({
  validFrom: new Date(),
  validTo: new Date(),
  scales: [{ from: 0, percentage: 0 }]
});

export function InputForm(props: InputFormProps) {
  const {
    actions: fixDiscountActions,
    onPushHandler: handleAddFixDiscount
  } = useArrayinputActions(createFixDiscount);
  const {
    actions: scaleDiscountActions,
    onPushHandler: handleAddScaleDiscount
  } = useArrayinputActions(createScaleDiscount);

  return (
    <Form>
      <Section title="Fix Rabatte">
        <Button onClick={handleAddFixDiscount}>+</Button>
        <Col>
          <Input.Arrayinput
            name="fixDiscounts"
            component={FixDiscountElement}
            actions={fixDiscountActions}
          />
        </Col>
      </Section>
      <Section title="Staffelrabatte">
        <Button onClick={handleAddScaleDiscount}>+</Button>
        <Col>
          <Input.Arrayinput
            name="scaleDiscounts"
            component={RnDScaleDiscountElement}
            actions={scaleDiscountActions}
          />
        </Col>
      </Section>
      <Row justifyContent="flex-end" padding="0 0.8rem 0 0.8rem">
        <Input.Submit label="Speichern" />
      </Row>
    </Form>
  );
}
