import React, { useContext, useCallback, useReducer } from "react";

type SideEffectFactory<TState> = () => (
  ofTypes: string[]
) => SideEffect<TState>;
type SideEffect<TState> = (
  state: TState,
  action: Partial<{ readonly type: string }>,
  dispatch: (action: any) => void
) => void;

interface Action<TPayload = any> {
  readonly type: string;
  readonly payload?: TPayload;
}

interface AppContextValue<TState> {
  readonly selectors: Record<string, (state: TState) => any>;
  dispatch<TAction extends Action>(action: TAction): void;
}

interface AppProviderProps<TState> {
  reducer(state: TState, action: any): TState;
  readonly state: TState;
  readonly selectors?: Record<string, (state: TState) => any>;
  readonly sideEffects?: ReadonlyArray<SideEffect<TState>>;
  readonly children: React.ReactNode;
}

const initialContext: AppContextValue<any> = {
  selectors: {},
  dispatch: (action: Action): void => {}
};
export const AppContext = React.createContext<AppContextValue<any>>(
  initialContext
);
export function useAppContext() {
  return useContext(AppContext);
}

function executeSideEffects<TState>(
  sideEffects: ReadonlyArray<SideEffect<TState>>,
  state: any,
  action: any,
  dispatch: any
): void {
  [...sideEffects].forEach((effect) => effect(state, action, dispatch));
}

export function AppProvider<TState>(props: AppProviderProps<TState>) {
  const { reducer, state: initState, sideEffects = [], selectors = {} } = props;
  const [state, dispatch] = useReducer(reducer, initState);
  const wrappedDispatch = useCallback(
    (action: Action) => {
      dispatch(action);
      executeSideEffects(sideEffects, state, action, dispatch);
    },
    [sideEffects, state, dispatch]
  );
  const context = {
    dispatch: wrappedDispatch,
    selectors
  };
  return (
    <AppContext.Provider<AppContextValue<TState>> value={context}>
      {props.children}
    </AppContext.Provider>
  );
}
