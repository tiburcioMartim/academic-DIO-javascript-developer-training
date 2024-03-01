/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de deconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const payment = {
    viewDebit: 0.1,
    viewMoneyPix: 0.15,
    evenTwice: 0,
    abouveTwice: -0.1,
    paymentFormat: '4',
    tag: 10,
    result: 0,
}

switch (payment.paymentFormat) {
    //À vista Débito, recebe 10% de deconto;
    case '1':
        payment.result = payment.tag - (payment.tag * payment.viewDebit);

        console.log(`\n\nVocê pagou R$${payment.tag.toFixed(2)} à vista no Débito \ne recebeu 10% de deconto. \nValor com desconto: \nR$${payment.result.toFixed(2)}\n\n`);
        break;

    //À vista no Dinheiro ou PIX, recebe 15% de desconto;
    case '2':
        payment.result = payment.tag - (payment.tag * payment.viewMoneyPix);

        console.log(`\n\nVocê pagou R$${payment.tag.toFixed(2)} à vista no Dinheiro ou no PIX \ne recebeu 15% de deconto. \nValor com desconto: \nR$${payment.result.toFixed(2)}\n\n`);
        break;

    //Em duas vezes, preço normal de etiqueta sem juros;
    case '3':
        payment.result = payment.tag - (payment.tag * payment.evenTwice);

        console.log(`\n\nVocê pagou R$${payment.tag.toFixed(2)} em até 2x \ne não recebeu deconto. \nValor integral: \nR$${payment.result.toFixed(2)}\n\n`);
        break;

    //Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
    case '4':
        payment.result = payment.tag - (payment.tag * payment.abouveTwice);

        console.log(`\n\nVocê pagou R$${payment.tag.toFixed(2)} acima de 2x \ne será cobrado juros de 10%. \nValor com juros: \nR$${payment.result.toFixed(2)}\n\n`);
        break;
}