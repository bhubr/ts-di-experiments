import { IWriter } from './IWriter';

export class ConsoleWriter implements IWriter {
  write(message: String) {
    console.log(message);
  }
}
