const entrada = [2000, 250];
let i = 0;

function gets() {
    const valor = entrada[i]
    i++
    return valor;
}

function print(texto) {
    console.log(texto);
}

function calculatorImpostos(n, i, n1){
    return (n - (n * i)) + n1
}

module.exports = { gets, print, calculatorImpostos };