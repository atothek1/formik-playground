import React, { useCallback, useMemo } from "react";
import {
  Text,
  Grid,
  Input,
  ItemComponentTypeProps,
  Row,
  Button,
  TimespanSelection,
  TimespanSelectionProps
} from "../../components";
import { FixDiscount } from "../../types";
import { formatDate } from "../../utils";
interface FixDiscountElementProps extends ItemComponentTypeProps<FixDiscount> {}
export function FixDiscountElement({
  namePrefix,
  data,
  index,
  helper
}: FixDiscountElementProps) {
  const label = `Fixrabatt - ${data.percentage}% - ${formatDate(
    data.validFrom
  )} / ${formatDate(data.validTo)}`;

  const handleRemove = useCallback(
    (e) => {
      e.preventDefault();
      helper.remove(index);
    },
    [index, helper]
  );

  const timeSpanProps: TimespanSelectionProps = useMemo(() => {
    return {
      labels: { from: "Gültig von:", to: "Gültig bis:" },
      names: { from: namePrefix("validFrom"), to: namePrefix("validTo") },
      isRequired: { from: true, to: true }
    };
  }, [namePrefix]);

  return (
    <Grid>
      <Row justifyContent="space-between">
        <Text as="h3">{label}</Text>
        <Button onClick={handleRemove}>-</Button>
      </Row>
      <Row width="50%">
        <Input.Number
          label="Rabatt:"
          name={namePrefix("percentage")}
          isRequired
        />
      </Row>
      <TimespanSelection {...timeSpanProps} />
    </Grid>
  );
}
