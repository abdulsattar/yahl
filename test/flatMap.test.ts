
import test from 'ava';
import { flatMap } from '../src/flatMap';

test(`should return empty list for invalid input`, t => {
  t.deepEqual(flatMap(item => [item, item], {} as number[]), []);
  t.deepEqual(flatMap(null as any, {} as number[]), []);
});

test(`should flatten & transform list`, t => {
  t.deepEqual(flatMap(item => [item, item], [1, 2, 3]), [1, 1, 2, 2, 3, 3]);
  t.deepEqual(flatMap(number => number % 2 === 0 ? [number, number] : number as any, [1, 2]), [1, 2, 2]);
});