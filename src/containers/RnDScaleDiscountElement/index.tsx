import React, { useCallback, useMemo } from "react";
import {
  Text,
  Grid,
  ItemComponentTypeProps,
  Row,
  Button,
  TimespanSelection,
  TimespanSelectionProps
} from "../../components";
import { RnDScaleDiscount } from "../../types";
import { formatDate } from "../../utils";
import { DiscountScales } from "../DiscountScales";
interface RnDScaleDiscountElementProps
  extends ItemComponentTypeProps<RnDScaleDiscount> {}

export function RnDScaleDiscountElement({
  namePrefix,
  data,
  index,
  helper
}: RnDScaleDiscountElementProps) {
  const label = `F&E Staffelrabatte - ${data.scales.length} - ${formatDate(
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
      <TimespanSelection {...timeSpanProps} />
      <DiscountScales name={namePrefix("scales")} />
    </Grid>
  );
}
