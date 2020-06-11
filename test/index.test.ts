import calculateHypotenuse from '../src/index';

describe('calculateHypotenuse', () => {
  it('calculates the hypotenuse if provided with two valid arguments', () => {
    const a = 1;
    const b = 1;
    const result = calculateHypotenuse(a, b);
    expect(result).toEqual(1.4142135623730951);
  });

  it('throws an AssertionError if a string is passed as first argument', () => {
    const a = '1';
    const b = 1;
    expect(() => {
      // @ts-expect-error
      calculateHypotenuse(a, b);
    }).toThrow();
  });
});
