// ARRAY <T> -> Este é generic
//  - T[] -> essa é outra forma de fazer

export function multiply(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiply(1, 2, 3);
const concat = concatString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upper);
