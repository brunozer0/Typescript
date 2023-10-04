// tuple
const dadosCliente: readonly [number, string] = [1, 'bruno']; // imutavel read only
const dadosCliente2: [number, string, string?] = [1, 'bruno'];

// dadosCliente[0] = 100;
// dadosCliente[1] = 'joao';

console.log(dadosCliente);
console.log(dadosCliente2);

//readonly array
const array1: readonly string[] = ['bruno', 'costa'];

const array2: ReadonlyArray<string> = ['bruno', 'costa'];

console.log(array1);
console.log(array2);
