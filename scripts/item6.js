const inputNascimento = document.getElementById('nascimento')
const btnDescobrir = document.getElementById('btnDescobrir')
const displaySigno = document.getElementById('displaySigno')


const signos = [
    ['2022-03-21','2022-04-20','Áries'],
    ['2022-04-21','2022-05-20','Touro'],
    ['2022-05-21','2022-06-20','Gêmeos'],
    ['2022-06-21','2022-07-21','Câncer'],
    ['2022-07-22','2022-08-22','Leão'],
    ['2022-08-23','2022-09-22','Virgem'],
    ['2022-09-23','2022-10-22','Libra'],
    ['2022-10-23','2022-11-21','Escorpião'],
    ['2022-11-22','2022-12-21','Sagitário'],
    ['2022-12-22','2022-01-20','Capricórnio'],
    ['2022-01-21','2022-02-19','Aquário'],
    ['2022-02-20','2022-03-20','Peixes']

]

function DepoisDeMesEDia(date1,date2){
    date1.setFullYear(1970)
    date2.setFullYear(1970)
    return date1.getTime()>=date2.getTime()
}
function AntesDeMesEDia(date1,date2){
    date1.setFullYear(1970)
    date2.setFullYear(1970)
    return date1.getTime()<=date2.getTime()
}


function descobreSigno (){

    const nascimento = inputNascimento.value
    if(nascimento=='')
        return;

    let dataNascimento = new Date(nascimento);

    for(let i=0;i<signos.length;i++){
        const dataInicial = new Date(signos[i][0])
        const dataFinal = new Date(signos[i][1])
        if(DepoisDeMesEDia(dataNascimento,dataInicial) && AntesDeMesEDia(dataNascimento,dataFinal))
        {
         displaySigno.innerText=signos[i][2]
        return;
        }
    }

}

btnDescobrir.addEventListener('click',descobreSigno)