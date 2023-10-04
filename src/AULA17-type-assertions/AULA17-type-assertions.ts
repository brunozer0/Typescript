/*recomendado*/

// condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//TYPE ASSERTION
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HtmlElement
const input = document.querySelector('.input') as HTMLInputElement;

input.value = 'qualquer coisa';
input.focus();

/**NAO RECOMENDADO */
//TYPE ASSERTION
const body4 = document.querySelector('body') as unknown as number;
// doidera, definindo como unknow e depois como unknow para definir como numero,
// caso seja necessario
console.log(body4);
// NON NULL ASSERTION
const body2 = document.querySelector('body')!;
body2.style.background = 'red'; // nao recomendado, nao use
