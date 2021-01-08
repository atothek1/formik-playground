export function tail<T>(arr: ReadonlyArray<T>): ReadonlyArray<T> {
  return arr.slice(1);
}
