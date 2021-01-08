import React, { useEffect } from "react";
import { Form, Row, Input, Section, SelectOption, Col } from "../../components";
import { useAppContext } from "../AppContext";
import { DiscountItem } from "./fields";

interface InputFormProps {
  readonly countryOptions: ReadonlyArray<SelectOption>;
}

export function InputForm({ countryOptions }: InputFormProps) {
  const { dispatch } = useAppContext();
  dispatch({ type: "TEST", payload: "FOFO" });
  // useEffect(() => dispatch({ type: "TEST", payload: "FOFO" }), [dispatch]);

  const discountArrayActions = {
    push: (...params) => {
      console.log(params);
    },
    remove: (...params) => {
      console.log(params);
    }
  };
  return (
    <Form>
      <Section title="Contact">
        <Row>
          <Input.Textinput label="Firstname" name="firstName" />
          <Input.Textinput
            label="Lastname"
            name="lastName"
            isRequired
            isDisabled
            helpText="Please enter a Lastname."
          />
        </Row>
        <Row>
          <Input.Textinput label="Zip" name="zipCode" />
          <Input.Textinput label="Street" name="street" />
        </Row>
      </Section>
      <Section title="Meta">
        <Row>
          <Row>
            <Input.Checkbox
              label="Active"
              name="active"
              helpText="Defines if the account is active or not."
            />
            <Input.Switch label="Is Admin" name="isAdmin" />
          </Row>
          <Input.Select
            label="Country"
            name="country"
            isRequired
            options={countryOptions}
            helpText="Please Select a country."
          />
        </Row>
        <Row>
          <Input.Textarea
            label="Notes"
            name="notes"
            isRequired
            helpText="Write some notes for the account."
          />
        </Row>
        <Row width="50%">
          <Input.Number label="Percent" name="percent" />
        </Row>
        <Col>
          <Input.Arrayinput
            label="Discounts"
            name="discounts"
            actions={discountArrayActions}
            component={DiscountItem}
          />
        </Col>
      </Section>
      <Row justifyContent="flex-end" padding="0 0.8rem 0 0.8rem">
        <Input.Submit label="Submit" />
      </Row>
    </Form>
  );
}
