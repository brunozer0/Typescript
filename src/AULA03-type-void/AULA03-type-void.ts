function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'bruno',
  sobrenome: 'costa',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
semRetorno('luiz', 'otavio');
pessoa.exibirNome();
export { pessoa };
