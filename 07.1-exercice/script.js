/*
1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima 'Reprovado'
Caso a média seja >= 5 e < 7 imprima 'Recuperação'
Caso a média seja >=7 imprima 'Aprovado'

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação
 */
const { print, gets } = require('./lib.js');



let soma = 0;
for (let i = 0; i < 3; i++) {
    soma = soma + gets();
}
const average = (soma / 3).toFixed(2)


if (average < 5) {
    print(`\n\nMédia ${average} \nreprovado\n\n`);

} else if (average >= 5 && average <= 7) {
    print(`\n\nMédia ${average} \nrecuperação\n\n`);

} else {
    print(`\n\nMédia ${average} \naprovado: passou de semestre\n\n`);
};