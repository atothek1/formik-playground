import { ArrayHelpers } from "formik";

export interface ItemComponentTypeProps<TData = any> {
  readonly data: TData;
  readonly index: number;
  readonly namePrefix: (fieldName: string) => string;
  readonly helper: Pick<ArrayHelpers, "remove">;
}

export type PushCallback<TData = any> = (item: TData) => void;
export type RemoveCallback = (index: number) => void;

export interface ArrayinputActions<TData = any> {
  readonly __wrapped__?: boolean;
  push?(): TData;
}
