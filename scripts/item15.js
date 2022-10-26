const usuarioCadastrado = {
    email: 'vinicius@gmail.com',
    senha: '123abc'
}



const emailInput = document.getElementById('email')
const senhaInput = document.getElementById('senha')
const btnLogin = document.getElementById('btnLogin')
const msgErroElem = document.getElementById('msgErroLogin')
const msgLoginBloqueado = document.getElementById('msgLoginBloqueado')
const divMenuOpcoes = document.getElementById('menuOpcoes')
const divLogin = document.getElementById('containerLogin')
const divMarcas = document.getElementById('containerMarcas')
const divProdutos = document.getElementById('containerProdutos')
const btnFinalizar = document.getElementById('btnFinalizar')
const btnProdutos = document.getElementById('btnProdutos')
const btnMarcas = document.getElementById('btnMarcas')


const inputNomeMarca = document.getElementById('nomeMarca')
const btnSalvarMarca = document.getElementById('btnSalvarMarca')
const msgErroMarca = document.getElementById('msgErroMarca')
const bodyMarcas = document.getElementById('bodyMarcas')
const marcaProdutoElem = document.getElementById('marcaProduto')
const msgErroTableMarcas = document.getElementById('msgErroTableMarcas')


const inputNomeProduto = document.getElementById('nomeProduto')
const inputValorProduto = document.getElementById('valorProduto')
const btnSalvarProduto = document.getElementById('btnSalvarProduto')
const bodyProdutos = document.getElementById('bodyProdutos')
const msgErroProduto = document.getElementById('msgErroProduto')


let countLoginErrado = 0;
const marcas = []
const produtos = []




function gerarId(array) {
    let id = array.length;
    if (array.length > 1) {
        id = array.reduce((prev, curr) => {
            return (prev.id > curr.id) ? prev.id : curr.id
        }
        )

    }

    return parseInt(id) + 1;
}


function validarMarca(marca) {
    msgErroMarca.innerText = ''
    msgErroMarca.classList.remove('d-none')
    if (marca.nome == '') {
        msgErroMarca.innerText = 'O nome da marca deve ser preenchido'
        return false
    }
    const marcasMesmoNome = marcas.filter(m => m.nome.toLowerCase() == marca.nome.toLowerCase())
    if (marcasMesmoNome.length > 0) {
        msgErroMarca.innerText = 'Já existe uma marca com esse nome'
        return false
    }



    msgErroMarca.classList.add('d-none')
    return true

}


function addMarca() {

    const marca = {
        nome: inputNomeMarca.value,
        id: gerarId(marcas)
    }

    if (validarMarca(marca)) {
        marcas.push(marca)
        popularTabela(bodyMarcas, marcas, gerarLinhaMarcas)
        popularMarcaProduto()
    }

}


function addProduto(){
    const marcaId = parseInt(marcaProdutoElem.value)

    const produto = {
        id:gerarId(produtos),
        nome:inputNomeProduto.value,
        valor:parseInt(inputValorProduto.value),
        marcaId:marcaId
    }
    if(validarProduto(produto)){
        produtos.push(produto)
        popularTabela(bodyProdutos,produtos,gerarLinhaProdutos)
    }
}

function validarProduto(produto){
    msgErroProduto.innerText = ''
    msgErroProduto.classList.remove('d-none')
    if(produto.nome==''){
        msgErroProduto.innerText='O nome do produto deve ser preenchido'
        return false;
    }

    const produtosMesmoNome = produtos.filter((p)=> p.nome.toLowerCase()==produto.nome.toLowerCase() && p.marcaId==produto.marcaId)
    if(produtosMesmoNome.length>0){
        msgErroProduto.innerText='Já existe um produto com esse nome'
        return false; 
    }

    if(isNaN(produto.marcaId) ){
        msgErroProduto.innerText='Selecione uma marca para o produto'
        return false;
    }
    const marcaExiste = marcas.find((m)=>m.id == produto.marcaId)

    if(typeof marcaExiste === 'undefined'){
        msgErroProduto.innerText='A marca selecionada é inválida'
        return false;
    }

    if(isNaN(produto.valor) || produtos.valor<0){
        msgErroProduto.innerText='O valor deve ser preenchido e maior que zero'
        return false;
    }
    msgErroProduto.classList.add('d-none')

    return true;

}


function popularMarcaProduto() {
    marcaProdutoElem.innerHTML = ''
    const optDefault = document.createElement('option')
    optDefault.value = ""
    optDefault.innerText = "Selecione uma marca ..."
    marcaProdutoElem.appendChild(optDefault)

    marcas.forEach((marca) => {
        const opt = document.createElement('option')
        opt.value = marca.id
        opt.innerText = marca.nome
        marcaProdutoElem.appendChild(opt)
    })

}

function popularTabela(tableBody, array, gerarLinha) {
    tableBody.innerHTML = ''
    array.forEach((a) => {
        gerarLinha(a)
    })
}

function removerMarca(id) {
    const produtosComAMarca = produtos.filter(p => p.marcaId == id)
    if (!produtosComAMarca.length > 0) {
        const index = marcas.findIndex((m) => m.id == id)
        marcas.splice(index, 1)

        const tr = document.getElementById(`marca-${id}`)
        tr.remove()
        popularMarcaProduto()

        return;
    }


    msgErroTableMarcas.innerText='O item não pode ser removido, possívelmente há um ou mais produtos associados a ele'
    msgErroTableMarcas.classList.remove('d-none')

    setTimeout(()=>{
        msgErroTableMarcas.classList.add('d-none')
    },5000)

}

function gerarLinhaMarcas(marca) {
    const tr = document.createElement('tr')

    tr.id = `marca-${marca.id}`

    tr.innerHTML = `
        <td>${marca.nome}</td>
    
        <td><button type="button" class="btn btn-danger" onclick="removerMarca(${marca.id})"><i
        class="bi bi-trash3-fill" ></i></button></td>
    `
    bodyMarcas.appendChild(tr)

}

function gerarLinhaProdutos(produto){
    const marca = marcas.find(m =>m.id == produto.marcaId);
    const tr = document.createElement('tr')
    tr.id = `produto-${produto.id}`

    tr.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.valor}</td>
        <td>${marca.nome}</td>
        <td><button type="button" class="btn btn-danger" onclick="removerProduto(${produto.id})"><i
        class="bi bi-trash3-fill" ></i></button></td>
    `
    bodyProdutos.appendChild(tr)
}

function removerProduto(id){
    const index = produtos.findIndex((m) => m.id == id)
    produtos.splice(index, 1)

    const tr = document.getElementById(`produto-${id}`)
    tr.remove()

    return;
}

function validarLogin(dadosAcesso) {
    msgErroElem.innerText = ''
    msgErroElem.classList.remove('d-none')
    if (dadosAcesso.email != usuarioCadastrado.email) {
        msgErroElem.innerText = 'Email incorreto'
        return false
    }
    if (dadosAcesso.senha != usuarioCadastrado.senha) {
        msgErroElem.innerText = 'Senha incorreta'

        return false
    }
    msgErroElem.classList.add('d-none')
    return true

}

function login() {
    const dadosAcesso = {
        email: emailInput.value,
        senha: senhaInput.value
    }

    if (validarLogin(dadosAcesso)) {
        divLogin.classList.add('d-none')
        divMenuOpcoes.classList.remove('d-none')
    }
    else {
        countLoginErrado++;
        if (countLoginErrado > 3) {
            btnLogin.disabled = true
            showLoginBloqueado(15)
        }
    }

}


function showLoginBloqueado(countInit) {
    if (countInit > 0) {
        setTimeout(() => {
            countInit--;
            msgLoginBloqueado.innerText = `O login será desbloqueado em ${countInit} segundos`
            msgLoginBloqueado.classList.remove('d-none')
            showLoginBloqueado(countInit);
        }, 1000)
        return
    }
    btnLogin.disabled = false
    countLoginErrado = 0;
    msgLoginBloqueado.classList.add('d-none')


}


function finalizar() {
    divMarcas.classList.add('d-none')
    divProdutos.classList.add('d-none')
    divMenuOpcoes.classList.add('d-none')
    divLogin.classList.remove('d-none')
}


function gerenciarProdutos() {
    divMarcas.classList.add('d-none')
    divProdutos.classList.remove('d-none')
}


function gerenciarMarcas() {
    divMarcas.classList.remove('d-none')
    divProdutos.classList.add('d-none')
}



btnLogin.addEventListener('click', login)
btnFinalizar.addEventListener('click', finalizar)
btnProdutos.addEventListener('click', gerenciarProdutos)
btnMarcas.addEventListener('click', gerenciarMarcas)
btnSalvarMarca.addEventListener('click', addMarca)
btnSalvarProduto.addEventListener('click',addProduto)