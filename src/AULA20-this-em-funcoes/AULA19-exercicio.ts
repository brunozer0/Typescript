export function exemplo(this: Date, nome: string, ageNumber: number): void {
  console.log(this);
  console.log(nome, ageNumber);
}

exemplo.call(new Date(), 'bruno', 32);

exemplo.apply(new Date(), ['bruno', 30]);
