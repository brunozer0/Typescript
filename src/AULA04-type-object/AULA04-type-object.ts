const objetoA: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveB = 'outro valor';

console.log(objetoA);
