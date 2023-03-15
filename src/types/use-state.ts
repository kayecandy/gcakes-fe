import { Dispatch, SetStateAction } from "react";

export type UseState<T = unknown> = [
  T,
  Dispatch<SetStateAction<T>>
]