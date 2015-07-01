import {Matchable} from './match';

export interface Option<T, U> {
  unwrap(): T | U,
}

export class Left<T> implements Option<T, void>, Matchable<T> {
  constructor(private value: T) {}

  unwrap(): T {
    return this.value;
  }

  get match(): T {
    return this.value;
  }
}

export class Right<U> implements Option<void, U>, Matchable<U> {
  constructor(private value: U) {}

  unwrap(): U {
    return this.value;
  }

  get match(): U {
    return this.value;
  }
}

export type Result<T, U> = Option<T, U>;
export type Ok<T> = Left<T>;
export type Err<U> = Right<U>;
