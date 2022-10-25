
const usuarioCadastrado = {
    email:'vinicius@gmail.com',
    senha:'123abc'
}

const emailInput= document.getElementById('email')
const senhaInput= document.getElementById('senha')
const btnLogin = document.getElementById('btnLogin')
const msgErroElem = document.getElementById('msgErro')
const divLogin = document.getElementById('login')
const divPainelAdmin = document.getElementById('painelAdmin')

function validarLogin(dadosAcesso){
    msgErroElem.innerText = ''
    msgErroElem.classList.remove('d-none')
    if(dadosAcesso.email != usuarioCadastrado.email){
        msgErroElem.innerText='Email incorreto'
        return false
    }
    if(dadosAcesso.senha != usuarioCadastrado.senha){
        msgErroElem.innerText='Senha incorreta'
        return false
    }
    msgErroElem.classList.add('d-none')
    return true

}

function login(){
    const dadosAcesso = {
        email:emailInput.value,
        senha:senhaInput.value
    }

    if(validarLogin(dadosAcesso)){
        divLogin.classList.add('d-none')
        divPainelAdmin.classList.remove('d-none')
    }

}

btnLogin.addEventListener('click',login)
