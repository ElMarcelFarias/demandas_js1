var pesoPessoa;
var pesoTotalElevador = 0;
var quantidadePessoas = 0;
var resposta = true;

const pesoMaximoElevador = 560;
const quantidadeMaximaPessoas = 7;

while (pesoTotalElevador < pesoMaximoElevador && quantidadePessoas < quantidadeMaximaPessoas && resposta == true) {
    pesoPessoa = parseFloat(prompt("Digite seu peso"));
    pesoTotalElevador += pesoPessoa;
    quantidadePessoas = quantidadePessoas + 1;

    if (pesoTotalElevador > pesoMaximoElevador) {
        pesoTotalElevador -= pesoPessoa;
        quantidadePessoas = quantidadePessoas - 1;
        alert("Espere o próximo elevador! Peso limite ultrapassado.")
    }

    console.log("pesoTotalElevador: " + pesoTotalElevador);
    console.log("quantidadePessoas: " + quantidadePessoas);
    
    if (quantidadePessoas < quantidadeMaximaPessoas && pesoTotalElevador < pesoMaximoElevador) {
        resposta = confirm("Existem mais pessoas para entrar no elevador?")
    } else {
        alert("Elevador está lotado.")
    }
}

alert("Informações:\nPeso total: " + pesoTotalElevador +".\n" + "Quantidade de pessoas: " + quantidadePessoas + ".")