/*
3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios

O salário a ser transferido é calculado da seguinte maneira:

valor bruto - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as alíquitas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00

*/
const { gets, print, calculatorImpostos } = require("./lib")



let listValue = []
for (let i = 0; i < 2; i++) {
    listValue[i] = gets();
}
let salarioBruto = listValue[0];
let beneficio = listValue[1];



if (salarioBruto <= 1100.00) {
    let result = calculatorImpostos(salarioBruto, 0.05, beneficio)
    print(`${result}`)

} else if (salarioBruto > 1100.00 && salarioBruto <= 2500.00) {
    let result = calculatorImpostos(salarioBruto, 0.10, beneficio)
    print(`${result}`)

} else {
    let result = calculatorImpostos(salarioBruto, 0.15, beneficio)
    print(`${result}`)
}