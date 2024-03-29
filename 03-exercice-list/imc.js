/* Descrition 
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMC em adultos Condição:
- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: Acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade Grave;
*/

//Calcula o IMC e retorna o valor
function calculatorImc(w, h) {
    return w / Math.pow(h, 2);
}

//Retorna o tipo de IMC com mensagem personalizada para a situação
function typeImc(vImc) {
    if (vImc < 18.5) {
        return `\n\nIMC ${vImc} \nEstá abaixo de 18.5: \nAbaixo do peso\n\n`;

    } else if (vImc >= 18.5 && vImc <= 25) {
        return `\n\nIMC ${vImc} \nEstá entre 18.5 e 25: \nPeso normal\n\n`;

    } else if (vImc >= 25 && vImc <= 30) {
        return `\n\nIMC ${vImc} \nEstá entre 25 e 30: \nAcima do peso\n\n`;

    } else if (vImc >= 30 && vImc <= 40) {
        return `\n\nIMC ${vImc} \nEstá entre 30 e 40: \nObeso\n\n`;

    } else {
        return `\n\nIMC ${vImc} \nEstá acima de 40: \nObesidade Grave\n\n`;
    };
};

(function () {
    const weight = 74;
    const height = 1.71;

    console.log(typeImc(calculatorImc(weight, height).toFixed(2)));
})();