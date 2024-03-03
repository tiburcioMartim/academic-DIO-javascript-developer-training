//Objeto ainda estruturado
//const funcoes = require('./lib-functions');
//console.log(funcoes.gets())   ~> call of format

//Objeto desestruturado (Object destructuring)
const { print, gets } = require('./lib-functions');

let counter = 0;
for (let i = 0; i < 5; i++) {
    const numSorteado = gets();
    if (numSorteado > counter) {
        counter = numSorteado;
    };
};

print(counter);