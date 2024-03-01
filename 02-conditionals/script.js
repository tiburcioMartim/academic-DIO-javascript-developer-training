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

let fuelPriceEtanol = 5.10;
let fuelPriceGasolina = 5.89;
let isfuelMyCar = 'etanol'; //etanol  //gasolina
let fuelPerKm = 0.05;
let distanceTripKm = 100;

let spentFuel = distanceTripKm * fuelPerKm;

if (isfuelMyCar === 'gasolina') {
    let result = spentFuel * fuelPriceGasolina
    console.log(result)

} else if (isfuelMyCar === 'etanol') {
    let result = spentFuel * fuelPriceEtanol
    console.log(result)

} else {
    console.log('Combustível inválido.')
}