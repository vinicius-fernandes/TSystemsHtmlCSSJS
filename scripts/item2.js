
const btnSalvar = document.getElementById('btnSalvar');
const valorElem = document.getElementById('valor');
const totalAPagarElem = document.getElementById('totalAPagar');

function calculaDesconto(valor,tipoPagamento){
    if(tipoPagamento == 'aVista' && valor >=100){
        return valor - valor*0.1
    }
    return valor;
}

function salvar(){
    const tipoPagamentoElem = document.querySelector('input[name="pagamento"]:checked');

    console.log(valorElem)
    console.log(tipoPagamentoElem)
    const aPagar = calculaDesconto(parseFloat(valorElem.value),tipoPagamentoElem.value)
    totalAPagarElem.innerText = `Total a pagar : ${aPagar}`
}

function reset(){
    totalAPagarElem.innerText = ''

}




btnSalvar.addEventListener('click',salvar);




