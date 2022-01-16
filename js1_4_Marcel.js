var numero1;
var numero2;
var contadora;
var mensagem = "Pares encontrados: ";

numero1 = parseInt(prompt("Digite o primeiro número:"));
numero2 = parseInt(prompt("Digite o segundo número:"));

if (numero1 % 2 == 0) {
    contadora = numero1 + 2;
} else {
    contadora = numero1 + 1;
}
for (contadora; contadora < numero2; contadora = contadora + 2) {
    mensagem += contadora + " ";
}
/*
for (contadora = numero1 + 1; contadora < numero2; contadora++) {
    if (contadora % 2 == 0) {
        mensagem += contadora + " ";
    }
}
*/
alert(mensagem + ".");