const numList = [5, 50, 10, 98, 23, 43, 65];
let i = 0;

function gets() {
    const valor = numList[i]
    i++
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };