const inputNome = document.getElementById('Nome')
const inputTelefone = document.getElementById('Telefone')
const inputNascimento = document.getElementById('Nascimento')
const inputEmail = document.getElementById('Email')
const bodyContatos = document.getElementById('bodyContatos')
const btnSalvar = document.getElementById('btnSalvar')
const msgErroElem = document.getElementById('msgErro')
const btnSalvarEdit = document.getElementById('btnSalvarEdicao')
const tituloForm = document.getElementById('tituloForm')
const aniversarianteDiaElem = document.getElementById('AniversarianteDoDia')
const aniversarianteEmBreveElem = document.getElementById('AniversarianteEmBreve')
const aniversarianteJaComemorouElem = document.getElementById('AniversarianteJaComemorou')
const contatos = []



function validarContato(contato) {
    msgErroElem.innerText = ''
    msgErroElem.classList.remove('d-none')

    if (contato.nome == '') {
        msgErroElem.innerText = 'O nome deve ser preenchido'
        return false
    }
    if (contato.nascimento == '') {
        msgErroElem.innerText = 'O nascimento deve ser preenchido'
        return false
    }
    if (contato.email == '') {
        msgErroElem.innerText = 'O email deve ser preenchido'
        return false
    }


    if (contato.telefone == '') {
        msgErroElem.innerText = 'O telefone deve ser preenchido'
        return false
    }


    msgErroElem.classList.add('d-none')

    return true;
}

function setToEdit(id) {
    const contato = contatos.find(contato => contato.id == id)

    tituloForm.innerText = 'Editar contato'
    btnSalvarEdit.value = id
    btnSalvar.classList.add('d-none')
    btnSalvarEdit.classList.remove('d-none')

    inputNome.value = contato.nome
    inputEmail.value = contato.email
    inputTelefone.value = contato.telefone
    inputNascimento.value = contato.nascimento
}


function addContato() {
    const contato = {
        id: gerarId(),
        nome: inputNome.value,
        telefone: inputTelefone.value,
        email: inputEmail.value,
        nascimento: inputNascimento.value
    }

    if (validarContato(contato)) {
        contatos.push(contato)
        popularTabela()
        setAniversariantes()
    }
}


function editContato() {
    const contato = {
        id: btnSalvarEdit.value,
        nome: inputNome.value,
        telefone: inputTelefone.value,
        email: inputEmail.value,
        nascimento: inputNascimento.value
    }
    if (validarContato(contato)) {
        const index = contatos.findIndex((c) => c.id == contato.id)
        contatos[index] = contato
        popularTabela()
        setAniversariantes()

        tituloForm.innerText = 'Criar contato'
        btnSalvarEdit.value = ''
        btnSalvar.classList.remove('d-none')
        btnSalvarEdit.classList.add('d-none')

        inputNome.value = ''
        inputEmail.value = ''
        inputTelefone.value = ''
        inputNascimento.value = ''
    }


}

function removerContato(id) {
    const index = contatos.findIndex((contato) => contato.id == id)
    contatos.splice(index, 1)

    const tr = document.getElementById(`contato-${id}`)
    tr.remove()
}



function gerarId() {
    let id = contatos.length;
    if (contatos.length > 1) {
        id = contatos.reduce((prev, curr) => {
            return (prev.id > curr.id) ? prev.id : curr.id
        }
        )

    }

    return parseInt(id) + 1;
}



function adicionarLinha(contato) {
    const tr = document.createElement('tr')

    tr.id = `contato-${contato.id}`

    tr.innerHTML = `
        <td>${contato.nome}</td>
        <td>${contato.nascimento}</td>
        <td>${contato.email}</td>
        <td>${contato.telefone}</td>
        <td> <button class="btn btn-primary" onclick=" setToEdit(${contato.id})">Alterar</button> </td>
        <td> <button class="btn btn-danger" onclick = "removerContato(${contato.id})">Remover</button> </td>
    `
    bodyContatos.appendChild(tr)
}


function popularTabela() {
    bodyContatos.innerHTML = ''
    contatos.forEach((contato) => {
        adicionarLinha(contato)
    })
}



function aniversarianteDia() {
    const dataAtual = new Date();

    const aniversariantes = contatos.filter((c) => {
        const nascimento = new Date(c.nascimento)

        return nascimento.getUTCDate() == dataAtual.getUTCDate() && nascimento.getUTCMonth() == dataAtual.getUTCMonth()
    })

    const nomesAniversariantes = aniversariantes.map(c => c.nome)
    return nomesAniversariantes

}

function aniversariantesEsquecidos() {
    const dataAtual = new Date();

    const aniversariantes = contatos.filter((c) => {
        const nascimento = new Date(c.nascimento)
        if (nascimento.getUTCMonth() != dataAtual.getUTCMonth())
            return nascimento.getUTCMonth() < dataAtual.getUTCMonth() && nascimento.getUTCMonth() >= 0

        return nascimento.getUTCDate() < dataAtual.getUTCDate()
    })

    const nomesAniversariantes = aniversariantes.map(c => c.nome)
    return nomesAniversariantes
}
function aniversariantesFuturos() {
    const dataAtual = new Date();

    const aniversariantes = contatos.filter((c) => {
        const nascimento = new Date(c.nascimento)

        if (nascimento.getUTCMonth() != dataAtual.getUTCMonth())
            return nascimento.getUTCMonth() > dataAtual.getUTCMonth() && nascimento.getUTCMonth() <= 11

        return nascimento.getUTCDate() > dataAtual.getUTCDate()
    }
    )
    const nomesAniversariantes = aniversariantes.map(c => c.nome)
    return nomesAniversariantes
}


function setAniversariantes() {
    aniversarianteDiaElem.innerText = aniversarianteDia().toString()
    aniversarianteEmBreveElem.innerText = aniversariantesFuturos().toString()
    aniversarianteJaComemorouElem.innerText = aniversariantesEsquecidos().toString()
}

btnSalvar.addEventListener('click', addContato)
btnSalvarEdit.addEventListener('click', editContato)