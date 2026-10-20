
function calcular() {

    let compra = Number(document.getElementById("compra").value);
    let desconto = 0;

    if (compra > 500) {
        desconto = compra * 0.1;
    } else if (compra > 100) {
        desconto = compra * 0.05;
    } else {
        desconto = 0;
    }

    let total = compra - desconto;

    document.getElementById("valorCompra").innerHTML =
        "Valor da compra: R$ " + compra.toFixed(2);

    document.getElementById("desconto").innerHTML =
        "Valor do desconto: R$ " + desconto.toFixed(2);

    document.getElementById("total").innerHTML =
        "Valor da compra com desconto: R$ " + total.toFixed(2);

}
