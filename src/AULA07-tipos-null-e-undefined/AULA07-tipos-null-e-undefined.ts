// UNDEFINED//
let x;

if (typeof x == 'undefined') x = 20;

console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string; // type anotation
} {
  return {
    firstName,
    lastName, // o retorno em si
  };
}

// UNDEFINED
export function squareOf(x: any) { //eslint-disable-line
  if (typeof x === 'number') return x * 2;

  return null;
}

// const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('conta invalida');
} else {
  console.log(squareOfTwoString * 100);
}
