/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (Nota 1 + Nota 2 + Nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado: passou de semestre;
*/

const note =
{
    noteOne: '8',
    noteTwo: '8',
    noteThree: '8'
}

note.noteOne = parseInt(note.noteOne, 10);
note.noteTwo = parseInt(note.noteTwo, 10);
note.noteThree = parseInt(note.noteThree, 10);

const average = ((note.noteOne + note.noteTwo + note.noteThree) / 3).toFixed(2);

if (average < 5) {
    console.log(`Média ${average}, reprovado`);

} else if (average >= 5 && average <= 7) {
    console.log(`Média ${average}, recuperação`);

} else {
    console.log(`Média ${average}, aprovado: passou de semestre`);
};