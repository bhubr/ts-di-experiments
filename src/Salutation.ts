import { IWriter } from './IWriter';

export class Salutation {
  private writer: IWriter;

  constructor(writer: IWriter) {
    this.writer = writer;
  }

  exclaim() {
    this.writer.write('Hello DI in TypeScript!');
  }
}
