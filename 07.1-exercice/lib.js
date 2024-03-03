const note = [2, 3, 6];
let i = 0;

function gets() {
    const valor = note[i]
    i++
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };