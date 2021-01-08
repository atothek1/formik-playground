import { useEffect, useState } from "react";
import { mockResponse } from "./discounts.mocks";

export function useFetchRnDDiscounts() {
  const [state, setState] = useState<any>({
    loading: true,
    data: { fixDiscounts: [], scaleDiscounts: [] },
    error: false
  });
  useEffect(() => {
    setTimeout(() => {
      setState({
        loading: false,
        data: mockResponse(),
        error: false
      });
    }, 1000);
  }, [setState]);
  return state;
}
