//2) Crie um programa que seja capaz de percorrer uma lista de números e imprimir cada número par encontrado.


const n = [];
const addN = 100;

for (let i = 0; i < addN; i++) {
    n[i]++
};

for (let i = 0; i < n.length; i++) {
    if (i % 2 == 0) {
        console.log(`Número ${i} é par.`)
    };
};