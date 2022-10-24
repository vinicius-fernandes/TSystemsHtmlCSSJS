const containerTabuada = document.getElementById('containerTabuada')

const btnCalcular = document.getElementById('btnCalcular')


const inputNum = document.getElementById('num')







function calcularTabuada() {
    containerTabuada.innerHTML = '';
    const valor = parseInt(inputNum.value);
    for (let i = 0; i <= 10; i++) {
        const paragraph = document.createElement('p');
        paragraph.innerText = `${valor} x ${i} = ${valor * i}`
        containerTabuada.appendChild(paragraph)
    }

}


btnCalcular.addEventListener('click', calcularTabuada)