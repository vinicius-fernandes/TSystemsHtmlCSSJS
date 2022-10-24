
const btnConverter =document.getElementById('btnConverter')
const valorParaConverterElem =document.getElementById('valorParaConverter')
const showConvertido = document.getElementById('convertido')
const dolar = 5.29;
const euro = 5.22;
const libra = 5.98;
function converter(){
    const opcaoSelecionada = document.querySelector('input[name="conversao"]:checked').value

    console.log(opcaoSelecionada)
    const valorParaConverter = parseFloat(valorParaConverterElem.value);
    console.log(valorParaConverter)
    let valorConvertido = 0;
    switch(parseInt(opcaoSelecionada)){
        case 0:
            valorConvertido = valorParaConverter*dolar
            break
        case 1:
            valorConvertido = valorParaConverter/dolar
            break
        case 2:
            valorConvertido = valorParaConverter*euro
            break
        case 3:
            valorConvertido=valorParaConverter/euro
            break
        case 4:
            valorConvertido=valorParaConverter*libra
            break
        case 5:
            valorConvertido=valorParaConverter/libra
            break
    }
    console.log(valorConvertido)
    showConvertido.innerText=valorConvertido

}


btnConverter.addEventListener('click',converter)