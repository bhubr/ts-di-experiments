import { IWriter } from './IWriter';
import { ConsoleWriter } from './ConsoleWriter';
import { Salutation } from './Salutation';

function main(): void {
  const writer: IWriter = new ConsoleWriter();
  const salutation = new Salutation(writer);
  salutation.exclaim();
}

main();
