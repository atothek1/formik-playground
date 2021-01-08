export interface DiscountScale {
  readonly from: number;
  readonly value: number;
}

export interface Discount {
  readonly from: Date;
  readonly until: Date;
  readonly value: number;
  readonly scales: DiscountScale[];
}
