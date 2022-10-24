const checkBoxes = document.getElementsByClassName('checkbox')

const totalItens = document.getElementById('totalItens')

function contarSelecionados(){
    const selecionados = document.querySelectorAll('input[type=checkbox]:checked')
    totalItens.innerText= selecionados.length;
}


for(let i=0;i<checkBoxes.length;i++){
    checkBoxes[i].addEventListener('change',contarSelecionados)
}