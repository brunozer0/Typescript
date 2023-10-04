enum Cores {
  VERMELHO = 10, //0
  AZUL = 100,
  AMARELO = 200,
}
enum Cores {
  ROXO = `ROXO`,
  VERDE = 201,
  ROSA,
}

function escolheACor(cor: Cores): void {
  console.log(Cores[cor]);
}
escolheACor(Cores.ROXO);

// apesar da segurança de tipo, o typescript permite isso:

// escolheACor(1234231); // nao funciona mais, mas antes funcionava.
