// Utilizar any apenas em ultimo caso;

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('olá'));
console.log(showMessage(1));
