const inputNome = document.getElementById("Nome")
const inputMarca= document.getElementById("Marca")
const inputValor = document.getElementById("Valor")
const btnSalvar = document.getElementById("btnSalvar")
const tableBody = document.getElementById("bodyProdutos")
const totalCadastrado = document.getElementById("totalCadastrado")
function adicionarLinha(){
    const linha = document.createElement('tr')

    const tdNome = document.createElement('td')
    tdNome.innerText=inputNome.value
    const tdMarca = document.createElement('td')
    tdMarca.innerText=inputMarca.value   
    const tdProduto = document.createElement('td')
    tdProduto.innerText=inputValor.value

    linha.appendChild(tdNome)
    linha.appendChild(tdMarca)
    linha.appendChild(tdProduto)

    tableBody.appendChild(linha)
    atualizarTotal()
}


function atualizarTotal(){
    const linhasBody = document.querySelectorAll("#bodyProdutos>tr")
    totalCadastrado.innerText=linhasBody.length
}

btnSalvar.addEventListener('click',adicionarLinha)