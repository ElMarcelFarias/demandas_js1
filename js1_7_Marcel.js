var nomeProduto;
var valorProduto;
var valorTotalPedido = 0;
var valorParceladoPedido;
var valorFinalPedido; // Valor com acréscimo/desconto
var formaPagamentoPedido;
var nomeFormaPagamento;
var quantidadeVezesPagamento;
var temMaisProdutos;

do {
    nomeProduto = prompt("Digite o nome do produto");
    valorProduto = parseFloat(prompt("Digite o valor do(a) " + nomeProduto + ": "));

    valorTotalPedido += valorProduto;
    console.log("valorTotalPedido: " + valorTotalPedido);

    temMaisProdutos = confirm("Tem mais produtos?"); 
} while (temMaisProdutos);

do {
    formaPagamentoPedido = parseInt(prompt("Formas de pagamento:\n1 - Cheque\n2 - Cartão de Crédito\n3 - Boleto\n4 - Dinheiro\nEscolha como deseja saldar seu débito:"));
} while (formaPagamentoPedido < 0 || formaPagamentoPedido > 4 || isNaN(formaPagamentoPedido));


switch (formaPagamentoPedido) {
    case 1:
        //Cheque
        nomeFormaPagamento = "Cheque";

        quantidadeVezesPagamento = parseInt(prompt("Deseja pagar em quantas vezes? [mínimo: 1; máximo:5]"));
        
        valorFinalPedido = valorTotalPedido //Atenção
        valorParceladoPedido = valorFinalPedido / quantidadeVezesPagamento;
        break;
    case 2:
        //Cartão de crédito
        nomeFormaPagamento = "Cartão de crédito";

        quantidadeVezesPagamento = parseInt(prompt("Deseja pagar em quantas vezes? [mínimo: 1; máximo:12]"));

        valorFinalPedido = valorTotalPedido * 1.05;
        valorParceladoPedido = valorFinalPedido / quantidadeVezesPagamento;
        break;
    case 3:
        //Boleto
        nomeFormaPagamento = "Boleto";

        valorFinalPedido = valorTotalPedido * 0.88;
        quantidadeVezesPagamento = "-";
        valorParceladoPedido = "-";
        break;
    case 4:
        //Dinheiro
        nomeFormaPagamento = "Dinheiro";

        if (valorTotalPedido > 300) {
            valorFinalPedido = valorTotalPedido * 0.95;
        } else {
            valorFinalPedido = valorTotalPedido;
        }
        quantidadeVezesPagamento = "-";
        valorParceladoPedido = "-";
        break;
    default:
        //Erro
        alert("Erro fatal: forma de pagamento inexistente.");
        break;
}

alert("Resumo Pedido:" +
"\nValor Total: " + valorTotalPedido + 
"\nForma Pagamento: " + nomeFormaPagamento + 
"\nNº Parcelas: " + quantidadeVezesPagamento + 
"\nValor Parcelado: " + valorParceladoPedido + 
"\nValor Final: " + valorFinalPedido);

console.clear();
console.log("-------------");
console.log("valorTotalPedido: " + valorTotalPedido);
console.log("formaPagamentoPedido: " + formaPagamentoPedido);
console.log("quantidadeVezesPagamento: " + quantidadeVezesPagamento);
console.log("valorParceladoPedido: " + valorParceladoPedido);
console.log("valorFinalPedido: " + valorFinalPedido);