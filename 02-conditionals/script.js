/*
02 - condicionais

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1- Preço do etanol;
2- Preço da gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto médio do combustível do carro por km;
5- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const fuelPriceEtanol = 5.10;
const fuelPriceGasolina = 5.89;
const isfuelMyCar = 'etanol'; //etanol  //gasolina
const fuelPerKm = 0.05;
const distanceTripKm = 100;

const spentFuel = distanceTripKm * fuelPerKm;

if (isfuelMyCar === 'gasolina') {
    const result = spentFuel * fuelPriceGasolina
    console.log(result)

} else if (isfuelMyCar === 'etanol') {
    const result = spentFuel * fuelPriceEtanol
    console.log(result)

} else {
    console.log('Combustível inválido.')
}