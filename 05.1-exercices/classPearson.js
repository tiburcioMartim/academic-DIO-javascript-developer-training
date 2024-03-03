/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura²));
Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class pearson{
    name; weight; height; 

    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    };    

    calculateImc(){
        return (this.weight / Math.pow(this.height, 2)).toFixed(2)
    }

    sayImc(){
        return console.log(`\nOlá, meu nome é ${this.name} tenho ${this.weight} Kg \na minha altura é ${this.height} mts e por fim, \nmeu IMC é: ${this.calculateImc()}\n`)
    };

    typeImc() {
        const vImc = this.calculateImc()
        if (vImc < 18.5) {
            return console.log(`\nIMC ${vImc} \nEstá abaixo de 18.5: \nAbaixo do peso\n`);
    
        } else if (vImc >= 18.5 && vImc <= 25) {
            return console.log(`\nIMC ${vImc} \nEstá entre 18.5 e 25: \nPeso normal\n`);
    
        } else if (vImc >= 25 && vImc <= 30) {
            return console.log(`\nIMC ${vImc} \nEstá entre 25 e 30: \nAcima do peso\n`);
    
        } else if (vImc >= 30 && vImc <= 40) {
            return console.log(`\nIMC ${vImc} \nEstá entre 30 e 40: \nObeso\n`);
    
        } else {
            return console.log(`\nIMC ${vImc} \nEstá acima de 40: \nObesidade Grave\n`);
        };
    };
};

const jose = new pearson('José', 70, 1.78);
const martim = new pearson('Martim', 79, 1.77);

jose.typeImc()
martim.typeImc()