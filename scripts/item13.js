
const btnSalvar = document.getElementById('btnSalvar')
const nomeInput = document.getElementById('Nome')
const nota1Input = document.getElementById('Nota1')
const nota2Input = document.getElementById('Nota2')
const msgErroElem = document.getElementById('msgErro')
const totalHomensElem = document.getElementById('totalHomens')
const totalMulheresElem = document.getElementById('totalMulheres')
const percentualHomensElem = document.getElementById('percentualHomens')
const percentualMulheresElem = document.getElementById('percentualMulheres')
const percentualAprovadosElem = document.getElementById('percentualAprovados')
const totalAprovadosElem = document.getElementById('totalAprovados')
const percentualReprovadosElem = document.getElementById('percentualReprovados')
const totalReprovadosElem = document.getElementById('totalReprovados')
const percentualRecuperacaoElem = document.getElementById('percentualRecuperacao')
const totalRecuperacaoElem = document.getElementById('totalRecuperacao')
const melhoresAlunosElem = document.getElementById('melhoresAlunos')
const notaAprovado = 7;
const notaReprovado = 5;
const bodyAlunos = document.getElementById('bodyAlunos')

const alunos = []


function validarAluno(aluno){
    msgErroElem.innerText = ''
    msgErroElem.classList.remove('d-none')
    if(aluno.nome==''){
        msgErroElem.innerText='Insira o nome do aluno'
        return false
    }
    if(isNaN(aluno.nota1) || aluno.nota1 <0){
        msgErroElem.innerText='A nota deve ser preenchida e maior que 0'
        return false
    }
    if(isNaN(aluno.nota2) || aluno.nota2 <0){
        msgErroElem.innerText='A nota deve ser preenchida e maior que 0'
        return false
    }
    if(aluno.genero==''){
        msgErroElem.innerText='O genero deve ser preenchido'
        return false
    }
    msgErroElem.classList.add('d-none')

    return true
}

function addAluno(){

    const aluno = {
        nome:nomeInput.value,
        nota1:parseInt(nota1Input.value),
        nota2:parseInt(nota2Input.value),
        genero:''
    }

    const generoSelecionado = document.querySelector('input[name="genero"]:checked');

    if(generoSelecionado !=null)
        aluno.genero = generoSelecionado.value

    if(validarAluno(aluno)){
        alunos.push(aluno)
        popularTabela()
        setRelatorio()
    }
}

function adicionarLinha(aluno) {
    const tr = document.createElement('tr')

    const media = (aluno.nota1 +aluno.nota2)/2

    let situacao='REPROVADO'

    if(media>=notaAprovado)
        situacao='APROVADO'
    if(media>notaReprovado && media<notaAprovado)
        situacao='RECUPERAÇÃO'

    tr.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.nota1}</td>
        <td>${aluno.nota2}</td>
        <td>${media}</td>
        <td>${situacao}</td>
        <td> ${aluno.genero}</td>
    `
    bodyAlunos.appendChild(tr)
}


function popularTabela() {
    bodyAlunos.innerHTML = ''
    alunos.forEach((aluno) => {
        adicionarLinha(aluno)
    })
}



function getHomens(){

    return alunos.filter(a=>a.genero=='M')
}

function getMulheres(){
    return alunos.filter(a=>a.genero=='F')

}

function getAprovados(){
    return alunos.filter((a=>{
        const media = (a.nota1+a.nota2)/2
        return media>=notaAprovado
    }))
}
function getReprovados(){
    return alunos.filter((a=>{
        const media = (a.nota1+a.nota2)/2
        return media<=notaReprovado
    }))
}
function getRecuperacao(){
    return alunos.filter((a=>{
        const media = (a.nota1+a.nota2)/2
        return media>notaReprovado && media<notaAprovado
    }))
}

function melhoresAlunos(){
    const medias = alunos.map(a => (a.nota1+a.nota2)/2)

    const maiorMedia = Math.max(...medias)

    return alunos.filter((a=>{
        const media = (a.nota1+a.nota2)/2
        return media==maiorMedia
    }))
}


function setRelatorio(){
    melhoresAlunosElem.innerHTML=''
    const totalAlunos = alunos.length
    totalHomensElem.innerText = getHomens().length
    totalMulheresElem.innerText= getMulheres().length
    percentualHomensElem.innerText = (getHomens().length/totalAlunos)*100
    percentualMulheresElem.innerText = (getMulheres().length/totalAlunos)*100
    totalAprovadosElem.innerText = getAprovados().length
    totalRecuperacaoElem.innerText=getRecuperacao().length
    totalReprovadosElem.innerText = getReprovados().length
    percentualRecuperacaoElem.innerText=(getRecuperacao().length/totalAlunos)*100
    percentualAprovadosElem.innerText=(getAprovados().length/totalAlunos)*100
    percentualReprovadosElem.innerText=(getReprovados().length/totalAlunos)*100

    melhoresAlunos().forEach((aluno)=>{
        const li = document.createElement('li')
        li.innerText=aluno.nome
        li.classList.add('list-group-item')
        melhoresAlunosElem.appendChild(li)
    })
}

btnSalvar.addEventListener('click', addAluno)