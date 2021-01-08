import { DiscountScaleItem } from "./DiscountScaleItem";

export interface RnDScaleDiscount {
  readonly id?: string;
  readonly validFrom: Date;
  readonly validTo: Date;
  readonly scales: DiscountScaleItem[];
}
