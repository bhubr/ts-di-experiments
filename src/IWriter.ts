// https://www.typescriptlang.org/docs/handbook/interfaces.html#function-types
interface WriteFunc {
  (message: string): void;
}

export interface IWriter {
  write: WriteFunc,
}
