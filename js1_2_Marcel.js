var peso;
var altura;
var imc;
var resultado;

peso = parseFloat(prompt("Digite seu peso: "));
altura = parseFloat(prompt("Digite sua altura: "));

imc = peso / (altura * altura);

if (imc < 17) {
    resultado = "Muito abaixo do peso";
} else if (imc < 18.5) {
    resultado = "Abaixo do peso";
} else if (imc < 24.5) {
    resultado = "Peso normal";
} else if (imc < 30) {
    resultado = "Acima do peso";
} else if (imc < 35) {
    resultado = "Obesidade I";
} else if (imc < 40) {
    resultado = "Obesidade II";
} else if (imc >= 40) {
    resultado = "Obesidade III";
} else {
    resultado = "Erro";
}

alert("O seu resultado é: " + resultado);