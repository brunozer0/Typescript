let x = 10; // eslint-disable-line
x = 0b1010;// eslint-disable-line

const y = 10;// eslint-disable-line
let a = 100 as const; // eslint-disable-line

const person = {
  nome: 'bruno' as const, // asserção
  sobrenome: 'costa',
};
console.log(person.nome);

function chooseColor(cor: 'vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(chooseColor('vermelho'));
// module mode
export default 1;
