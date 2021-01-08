export interface FixDiscount {
  readonly id?: string;
  readonly validFrom: Date;
  readonly validTo: Date;
  readonly percentage: number;
}
