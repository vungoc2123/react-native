export enum Code {
  success = 0,
  failed = 1,
}

export interface IParams extends Record<string, any> {
  page: number;
  size: number;
}

export interface IResponse<T> {
  code: Code;
  msg?: string;
  data?: T;
}

export interface IListDataResponse<T> {
  content: T[];
  last: boolean;
}
