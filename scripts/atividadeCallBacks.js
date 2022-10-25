// -> Criar uma página html para inserir produtos: descrição, preço, estoque, unidade de medida.
// ->inserir dados em um array de objetos
// ->Criar opção de listar os dados em tabela ou outra forma de visualização: lista, paragrafo, etc.



const produtos = []
const btnSalvar = document.getElementById('btnSalvar')
const inputNome = document.getElementById('Nome')
const inputUnidadeMedida = document.getElementById('unidadeMedida')
const inputValor = document.getElementById('Valor')
const inputEstoque = document.getElementById('Estoque')
const tableBody = document.getElementById('bodyProdutos')
const opcoesExibicao = document.getElementById('opcoesExibicao')
const ulProdutos = document.getElementById('ulProdutos')
const divProdutos = document.getElementById('divProdutos')
const tableProdutos = document.getElementById('tabelaProdutos')
const msgErro = document.getElementById('msgErro')
function addProduto(displayProdutos) {
    msgErro.classList.add('d-none')

    const produto = {
        nome: inputNome.value,
        unidadeMedida: inputUnidadeMedida.value,
        valor: parseFloat(inputValor.value),
        estoque: parseInt(inputEstoque.value)
    }
    if (validaProduto(produto)) {
        produtos.push(produto)
        displayProdutos()
    }
}

function validaProduto(produto) {


    if(produto.nome == ''){
        msgErro.classList.remove('d-none')
        msgErro.innerText = 'O nome deve ser preenchido'
        return false
    }
    if(produto.unidadeMedida == ''){
        msgErro.classList.remove('d-none')
        msgErro.innerText = 'A unidade de medida deve ser preenchida'
        return false
    }
    if(isNaN(produto.valor) ||  produto.valor < 0 ){
        msgErro.classList.remove('d-none')
        msgErro.innerText = 'O valor do produto deve ser preenchido e maior que 0'
        return false
    }
    if(isNaN(produto.estoque)  ){
        msgErro.classList.remove('d-none')
        msgErro.innerText = 'O estoque do produto deve ser preenchido '
        return false
    }
    return true;
}

function popularTabela() {
    tableBody.innerHTML = ''
    produtos.forEach((produto) => {
        console.log(produto)
        const tr = document.createElement('tr')

        const tdNome = document.createElement('td')
        tdNome.innerText = produto.nome

        const tdUnidadeMedida = document.createElement('td')
        tdUnidadeMedida.innerText = produto.unidadeMedida

        const tdValor = document.createElement('td')
        tdValor.innerText = produto.valor

        const tdEstoque = document.createElement('td')
        tdEstoque.innerText = produto.estoque

        tr.appendChild(tdNome)
        tr.appendChild(tdUnidadeMedida)
        tr.appendChild(tdValor)
        tr.appendChild(tdEstoque)
        tableBody.appendChild(tr)
    })


}
function produtoToString(produto) {
    return JSON.stringify(produto)
}

function popularLista() {
    ulProdutos.innerHTML = ''
    produtos.forEach((produto) => {
        const li = document.createElement('li')
        li.innerText = produtoToString(produto)
        ulProdutos.appendChild(li)
    })
}

function popularDiv() {
    divProdutos.innerHTML = ''
    produtos.forEach((produto) => {
        const p = document.createElement('p')
        p.innerText = produtoToString(produto)
        divProdutos.appendChild(p)
    })
}

function changeDisplay() {
    const opcaoSelecionada = parseInt(opcoesExibicao.value)

    switch (opcaoSelecionada) {
        case 1:
            ulProdutos.classList.add('d-none')
            tableProdutos.classList.add('d-none')
            divProdutos.classList.remove('d-none')
            popularDiv()
            break
        case 2:
            ulProdutos.classList.remove('d-none')
            tableProdutos.classList.add('d-none')
            divProdutos.classList.add('d-none')
            popularLista()

            break
        default:
            ulProdutos.classList.add('d-none')
            tableProdutos.classList.remove('d-none')
            divProdutos.classList.add('d-none')
            popularTabela()
            break
    }
}


btnSalvar.addEventListener('click', () => { addProduto(changeDisplay) })
opcoesExibicao.addEventListener('change', changeDisplay)