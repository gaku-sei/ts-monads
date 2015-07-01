/// <reference path="definitions/lib.es6.d.ts" />

import {match} from './match';
import {Maybe, Just, Nothing} from './maybe';
import {Option, Left, Right} from './option';

// Maybe

const just = new Just(42);
const nothing = new Nothing();

let log = <T>(value: T): T => {
  console.log(value);
  return value;
}

just.map(x => x + 42).map(log);
nothing.map(x => x + 42).map(log);

match(just, {
  Just: value => console.log(value),
  Nothing: () => console.log('nothing')
});

match(nothing, {
  Just: value => console.log(value),
  Nothing: () => console.log('nothing')
});

let div = (x: number, y: number): Maybe<number> => {
  return <Maybe<number>>(y === 0 ? new Nothing() : new Just(x / y));
};

match(div(12, 4), {
  Just: x => console.log(x),
  Nothing: () => {}
});

match(div(12, 0), {
  Just: x => console.log(x),
  Nothing: () => {}
});

// Option

const left = new Left('foo');
const right = new Right([1, 2, 3]);

match(left, {
  Left: x => console.log('Left is: ' + x)
});
