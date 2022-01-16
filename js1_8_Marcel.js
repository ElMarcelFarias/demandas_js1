var idadeCrianca;
var mesCrianca;
var mesTotalCrianca;
var quantidadeBercario_1 = 0;
var quantidadeBercario_2 = 0;
var quantidadeMaternal_1 = 0;
var quantidadeMaternal_2 = 0;
var quantidadeInfantil = 0;
var temMaisCrianca;

do {
    idadeCrianca = parseInt(prompt("Digite a idade"));
    mesCrianca = parseInt(prompt("Digite quantidade de meses completos"));
    mesTotalCrianca = (idadeCrianca * 12) + mesCrianca;
    
    if (mesTotalCrianca <= 13) {
        quantidadeBercario_1 += 1;
    } else if (mesTotalCrianca <= 25) {
        quantidadeBercario_2 += 1;
    } else if (mesTotalCrianca <= 34) {
        quantidadeMaternal_1 += 1;
    } else if (mesTotalCrianca <= 46) {
        quantidadeMaternal_2 += 1 ;
    } else if (mesTotalCrianca <= 60) {
        quantidadeInfantil += 1;
    } else {
        alert("Falha ao categorizar.");
    }

    temMaisCrianca = confirm("Tem mais crianças?");
} while (temMaisCrianca);

alert("Relatório:" +
"\nBerçário I: " + quantidadeBercario_1 +
"\nBerçário II: " + quantidadeBercario_2 +
"\nMaternal I: " + quantidadeMaternal_1 +
"\nMaternal II: " + quantidadeMaternal_2 +
"\nInfantil: " +quantidadeInfantil);