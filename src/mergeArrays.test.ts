import mergeSort from './mergeArrays';

describe('merge function', () => {
  it('merges two sorted arrays', () => {
    const result = mergeSort([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

