import variance from '..';

describe('variance', () => {
  test('array', () => {
    var data = [15, 13, 17, 7];
    var v = variance(data);
    expect(v).toBeCloseTo(18.667, 3);
    expect(variance(data, { unbiased: true })).toBe(v);
    expect(variance(data, { unbiased: false })).toBe(14);
  });

  test('typed array', () => {
    let typedArray = new Uint16Array(4);
    typedArray[0] = 15;
    typedArray[1] = 13;
    typedArray[2] = 17;
    typedArray[3] = 7;

    var v = variance(typedArray);
    expect(v).toBeCloseTo(18.667, 3);
    expect(variance(typedArray, { unbiased: true })).toBe(v);
    expect(variance(typedArray, { unbiased: false })).toBe(14);
  });
});
