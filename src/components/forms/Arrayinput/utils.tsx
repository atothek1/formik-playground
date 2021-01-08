import { ArrayHelpers, FormikProps, getIn } from "formik";
import React from "react";
import { Row } from "../../layout";
import { ArrayinputActions, ItemComponentTypeProps } from "./types";

type InnerProps = ArrayHelpers & {
  readonly name: string;
  readonly form: FormikProps<any>;
};

export function createFieldArrayRenderer(
  ItemComponent: React.ComponentType<ItemComponentTypeProps>,
  actionsRef?: React.MutableRefObject<ArrayinputActions>
) {
  const actions = actionsRef?.current;
  const renderer = (fieldArrayProps: InnerProps) => {
    const {
      push,
      pop,
      replace,
      insert,
      remove,
      move,
      name,
      form
    } = fieldArrayProps;
    if (actions && !actions.__wrapped__) {
      // should be wrapped only once if externalActions are passed
      // cast to any to set readonly property __wrapped
      (actions as any).__wrapped__ = true;
      if (actions.push) {
        const _push = actions.push;
        actions.push = (): void => {
          if (typeof _push === "function") {
            push(_push());
          }
        };
      }
    }

    const helper: Pick<ArrayHelpers, "remove"> = {
      remove
    };

    const values = getIn(form.values, name, []);
    if (values.length <= 0) {
      return (
        <Row alignItems="center">
          <span>No Items.</span>
        </Row>
      );
    }

    return values.map((item: any, idx: number) => {
      const prefix = `${name}.${idx}.`;
      const prefixer = (fieldName: string) => {
        const finalName = prefix + fieldName;
        return finalName;
      };
      return (
        <ItemComponent
          key={prefix}
          data={item}
          index={idx}
          helper={helper}
          namePrefix={prefixer}
        />
      );
    });
  };
  return { renderer };
}
