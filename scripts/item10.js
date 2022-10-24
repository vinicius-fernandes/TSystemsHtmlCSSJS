
const btnCandidato1 = document.getElementById('candidato1')
const btnCandidato2 = document.getElementById('candidato2')
const btnCandidato3 = document.getElementById('candidato3')
const btnCandidato4 = document.getElementById('candidato4')
const btnNulo = document.getElementById('nulo')
const displayTotais = document.getElementById('displayTotal')
const displayMaisVotados = document.getElementById('displayMaisVotos')


const candidatos = new Map([
    ["Candidato 1",0],
    ["Candidato 2",0],
    ["Candidato 3",0],
    ["Candidato 4",0],
    ["Nulo",0],
])



function adicionarVoto(event){
    const opcaoVoto = event.target.value
    const novoTotalCandidato = candidatos.get(opcaoVoto)+1;
    candidatos.set(opcaoVoto,novoTotalCandidato)
    popularDisplays()
}


function totalVotos(){
    let totalVotos =0;
    candidatos.forEach(function(voto,candidato){
     totalVotos +=voto;
    }
    )

    return totalVotos;
}


function maisVotados(){
    let maiorVoto = Number.MIN_SAFE_INTEGER;

    candidatos.forEach(function(voto,candidato){
        if(voto>maiorVoto){
            maiorVoto = voto
        }
    }
    )

    let maisVotados = ""

    candidatos.forEach(function(voto,candidato){
        if(voto==maiorVoto){
            maisVotados+= candidato + ", ";
        }
    })

    return maisVotados;

}

function popularDisplays(){
    displayTotais.innerText = totalVotos();
    displayMaisVotados.innerText= maisVotados();

    let i=1;
    candidatos.forEach(function(voto,candidato){
        const elemento = document.getElementById(`display-${i}`)
        elemento.innerText=voto
        i++;
    })

}

btnCandidato1.addEventListener('click',adicionarVoto)
btnCandidato2.addEventListener('click',adicionarVoto)
btnCandidato3.addEventListener('click',adicionarVoto)
btnCandidato4.addEventListener('click',adicionarVoto)
btnNulo.addEventListener('click',adicionarVoto)