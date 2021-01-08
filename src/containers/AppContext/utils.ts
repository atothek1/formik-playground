export function applyMiddlewares(middlewares, action, state, dispatch) {
  middlewares.forEach((fn) => {
    fn(action, state, dispatch);
  });
}
