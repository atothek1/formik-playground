import { useEffect, useRef, useState } from "react";

export function useSubmitRnDDiscounts() {
  const [state, setState] = useState<any>({
    loading: false,
    data: undefined,
    error: false
  });
  const requestRef = useRef<any>();
  function getRequestRef() {
    if (!requestRef.current) {
      requestRef.current = {
        state,
        setState,
        execute: (data: any) => {
          requestRef.current.setState({ error: false, data, loading: true });
          setTimeout(() => {
            requestRef.current.setState({
              error: false,
              data: { status: "SUCCESS" },
              loading: false
            });
          }, 1000);
        },
        unmount: () => {}
      };
    }
    return requestRef.current;
  }
  const request = getRequestRef();
  useEffect(() => request.unmount);
  return [request.execute, state];
}
