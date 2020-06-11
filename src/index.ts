import { strict as assert } from 'assert';

export default function calculateHypotenuse(a: number, b: number) {
  assert(typeof a === 'number');
  assert(typeof b === 'number');
  return Math.sqrt(a * a + b * b);
}
