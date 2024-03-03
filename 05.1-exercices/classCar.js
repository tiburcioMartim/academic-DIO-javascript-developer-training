/*
1) Crie uma classe para representar carros.
Os carros possuem uma marca (brand), uma cor (color) e um gasto médio de combustível por km (average fuel per km) rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Car {
    brand;
    model;
    color;
    averageFuelPerKm;

    constructor(brand, model, color, averageFuelPerKm) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.averageFuelPerKm = averageFuelPerKm;
    };

    isJourneyFuelPrice(kmTripRoute, fuelLitre) {
        return (kmTripRoute * fuelLitre * this.averageFuelPerKm).toFixed(2)
    };
};

const objectCars = {
    uno: new Car('Fiat', 'Uno', 'Prata', 1 / 18),
    palio: new Car('Fiat', 'Palio', 'Vermelha', 1 / 15)
}

const distance = 100;
const fuelPrice = 6.4;

console.log(objectCars.uno.isJourneyFuelPrice(distance, fuelPrice));
console.log(objectCars.palio.isJourneyFuelPrice(distance, fuelPrice));