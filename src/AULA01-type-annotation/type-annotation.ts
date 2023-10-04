/*eslint-disable */
// Tibos basicos (qualquer tipo de strings)

const nome: string = 'luiz'; // qualquer tipo de string
const idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
const adulto: boolean = true; // true ou false
const simbolo: symbol = Symbol('qualquer symbol'); //symbol

// let big: bigint = 10n;


//ARRAYS
let arrayOfNumbers: Array<number> = [1,2,3];
let arrayOfNumbers2: number[] = [1,2,3];

let arrayOfStrings:  Array<string> = ['a','b']
let arrayOfStrings2:  String[] = ['a','b']


//OBJETOS

let pessoa : {nome: string, idade:number, adulto?: boolean} = {

idade: 30,
nome: 'bruno'
}

// funções

function soma(x: number,y:number):number {

    return x+ y;
}

const soma2: (x: number, y: number) => number = (x,y) => x+y;

