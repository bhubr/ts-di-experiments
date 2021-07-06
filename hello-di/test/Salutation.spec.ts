import * as assert from 'assert';
import { IWriter } from '../src/IWriter';
import { Salutation } from '../src/Salutation';

class SpyWriter implements IWriter {
  public writtenMessage: String = '';

  write(message: String) {
    this.writtenMessage = message;
  }
}

describe('test Salutation', () => {
  it('writes correct message', () => {
    const writer = new SpyWriter();
    const salutation = new Salutation(writer);
    salutation.exclaim();
    assert.strictEqual(writer.writtenMessage, 'Hello DI in TypeScript!');
  });
});
