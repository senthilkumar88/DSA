const twoSumUptoK = require('./index');

test('twoSumUptoK function exists', () => {
  expect(twoSumUptoK).toBeDefined();
});

test('twoSumUptoK twoSumUptoKs a string', () => {
  expect(twoSumUptoK('abcd')).toEqual('dcba');
});

test('twoSumUptoK twoSumUptoKs a string', () => {
  expect(twoSumUptoK('  abcd')).toEqual('dcba  ');
});
