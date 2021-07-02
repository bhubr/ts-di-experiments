import * as assert from 'assert';
import yo from '../src/index';

describe('test yo', () => {
  it('with name Joe', () => {
    assert.strictEqual(yo('Joe'), 'yo Joe');
  });
});
