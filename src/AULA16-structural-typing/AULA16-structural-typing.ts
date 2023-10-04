type verifyUserFN = (user: User, sentValues: User) => boolean;

type User = { username: string; password: string };
// o typescript utiliza os structural typing

const verifyUser: verifyUserFN = (user, sentValue) => {
  /* essa funcao precisa do type user, mas o type user
  nao quer dizer q tenha q ser especificamente o tipo USER.
  Apenas precisa de um objeto que cumpa as regras q esse tipo tem,
  que no caso seria o user name como string,
   e password como string*/

  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456' };

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);

// O typescript nao esta ligando para a identidade das coisas.

//
