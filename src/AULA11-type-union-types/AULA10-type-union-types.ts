function addorConcat(a: number | string, b: number | string): number | string {
  if (typeof a === `number` && typeof b === `number`) return a + b;

  return `${a}${b}`;
}

console.log(addorConcat(10, 20));
console.log(addorConcat(`10`, `20`));
