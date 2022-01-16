var placa;
var diaSemana;

placa = prompt("Digite o último número da placa do teu carro:");

switch (placa) {
    case "0":
    case "5":
        diaSemana = "Segunda-Feira";
        break;
    case "1":
    case "6":
        diaSemana = "Terça-Feira";
        break;
    case "2":
    case "7":
        diaSemana = "Quarta-Feira";
        break;
    case "3":
    case "8":
        diaSemana = "Quinta-Feira";
        break;
    case "4":
    case "9":
        diaSemana = "Sexta-Feira";
        break;
    default:
        alert("Erro");
        break;
}

alert("Não pode circular na: " + diaSemana);