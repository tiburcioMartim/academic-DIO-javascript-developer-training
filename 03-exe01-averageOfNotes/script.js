/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (Nota 1 + Nota 2 + Nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado: passou de semestre;
*/

let note = [
    {
        noteOne: '5',
        noteTwo: '3',
        noteThree: '7'
    }
];

note[0].noteOne = parseInt(note[0].noteOne, 10);
note[0].noteTwo = parseInt(note[0].noteTwo, 10);
note[0].noteThree = parseInt(note[0].noteThree, 10);

let average = ((note[0].noteOne + note[0].noteTwo + note[0].noteThree) / 3).toFixed(2);

if(average < 5){
    console.log(`Média ${average}, reprovado`);

} else if (average >= 5 && average <= 7){
    console.log(`Média ${average}, recuperação`);
    
} else {
    console.log(`Média ${average}, aprovado: passou de semestre`);
};