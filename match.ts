export type Hash = {[key: string]: any};

export interface Matchable<T> {
  match?: T;
}

export function match<T, U>(matchable: Matchable<T>, matcher: Hash): U | void {
  let fn = matcher[matchable.constructor.name];
  if(fn) {
    if(matchable.match) {
      return fn(matchable.match);
    } else {
      return fn();
    }
  }
};
