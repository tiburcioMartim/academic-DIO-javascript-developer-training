/*
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
function imc() {
    const myWeight = 78; // Math.random() * 91;
    const myHeight = 1.75 // Math.random() * (2.4 - 1);
    return myWeight / Math.pow(myHeight,2)
}

const vImc = imc().toFixed(2);

if (vImc < 18.5) {
    console.log(`IMC ${vImc}, está abaixo de 18.5: Abaixo do peso`);

} else if (vImc >= 18.5 && vImc <= 25) {
    console.log(`IMC ${vImc}, está entre 18.5 e 25: Peso normal`);

} else if (vImc >= 25 && vImc <= 30) {
    console.log(`IMC ${vImc}, está entre 25 e 30: Acima do peso`);

} else if (vImc >= 30 && vImc <= 40) {
    console.log(`IMC ${vImc}, está entre 30 e 40: Obeso`);

} else {
    console.log(`IMC ${vImc}, está acima de 40: Obesidade Grave`);

}