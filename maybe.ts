import {Matchable} from './match';

export interface Maybe<T> {
  unwrap(): T;
  map(cb: (value: T) => T): Maybe<T>;
}

export class Just<T> implements Maybe<T>, Matchable<T> {
  constructor(private value: T) {}

  unwrap(): T {
    return this.value;
  }

  map(cb: (arg: T) => T): Just<T> {
    return new Just<T>(cb(this.value));
  }

  get match(): T {
    return this.value;
  }
}

export class Nothing implements Maybe<void>, Matchable<void> {
  unwrap() {
    throw new Error('Nothing');
  }

  map(cb: (any) => any): Nothing {
    return new Nothing();
  }
}
