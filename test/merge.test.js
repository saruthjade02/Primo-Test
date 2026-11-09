const { test } = require('node:test');
const assert = require('node:assert/strict');
const { merge } = require('../src/merge.ts');

test('merges three collections in ascending order', () => {
  assert.deepEqual(merge([1, 4, 7], [2, 5, 8], [9, 6, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('handles empty collections', () => {
  assert.deepEqual(merge([], [], []), []);
  assert.deepEqual(merge([], [], [5, 2, 0]), [0, 2, 5]);
  assert.deepEqual(merge([], [1, 3], []), [1, 3]);
});

test('preserves duplicates and zero', () => {
  assert.deepEqual(merge([0, 2, 2], [0, 2], [2, 2, 0]), [0, 0, 0, 2, 2, 2, 2, 2]);
});

test('handles different lengths and values across collections', () => {
  assert.deepEqual(merge([1], [4, 5, 6, 7], [10, 3, 2, 0]), [0, 1, 2, 3, 4, 5, 6, 7, 10]);
});

test('does not mutate the input collections', () => {
  const first = [1, 3];
  const second = [2, 4];
  const third = [6, 5];
  merge(first, second, third);
  assert.deepEqual([first, second, third], [[1, 3], [2, 4], [6, 5]]);
});
