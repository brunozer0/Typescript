type TemNome = { nome: string };
type temSobrenome = { sobrenome: string };

type temIdade = { idade: number };

type Pessoa = TemNome & temSobrenome & temIdade; //and

type AB = `A` | `B`;
type AC = `A` | `C`;
type AD = `D` | `A`;

type Intersection = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Bruno',
  sobrenome: 'costa',
  idade: 30,
};
console.log(pessoa);

export { pessoa };
