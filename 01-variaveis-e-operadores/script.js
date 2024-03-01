/*
01 - variáveis e operadores

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
 1- preço do combustivel; = R$ 4.15
 2- gasto médio de combustivel do carro por km; = 18 km por 1 litro
 3- distancia em km da viagem; = 110 km


 */

 let fuelPrice = 4.15
 let averageFuelConsumption = 0.05
 let kmDistance = 110

 let result = (kmDistance * averageFuelConsumption) * fuelPrice

 console.log(result.toFixed(2))