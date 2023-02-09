export type ApiResponse<T> = {
  loading: boolean;
  value?: T;
  error?: Error;
};
