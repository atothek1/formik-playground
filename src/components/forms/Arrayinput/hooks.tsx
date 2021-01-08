import { MutableRefObject, SyntheticEvent, useCallback, useRef } from "react";
import { ArrayinputActions } from "./types";

export function useArrayinputActions<TData = any>(
  factory: () => TData
): {
  readonly actions: MutableRefObject<ArrayinputActions<TData>>;
  onPushHandler(e: SyntheticEvent): void;
} {
  const actions = useRef({
    __wrapped__: false,
    push(): TData {
      return factory();
    }
  });

  const onPushHandler = useCallback(
    (e) => {
      e.preventDefault();
      actions.current.push();
    },
    [actions]
  );
  return { actions: actions, onPushHandler };
}
