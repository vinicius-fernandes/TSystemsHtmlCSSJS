const btnConverter = document.getElementById('btnConverter')
const displayHoraLocal = document.getElementById('displayHorarioLocal')
const displayHoraConvertida = document.getElementById('displayHorarioConvertido')


function exibirHorarios(){
    const horaAtual = new Date();

    displayHoraLocal.innerText=horaAtual.toLocaleTimeString()
    const tzParaConverter = document.querySelector('input[name="timezone"]:checked');
    switch(parseInt(tzParaConverter.value)){
        case 0:
            var lisboaTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Lisbon"});
            lisboaTime = new Date(lisboaTime);
            displayHoraConvertida.innerText = lisboaTime.toLocaleTimeString()
            break
        case 1:
            var novoIorqueTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
            novoIorqueTime = new Date(novoIorqueTime);
            displayHoraConvertida.innerText = novoIorqueTime.toLocaleTimeString()
            break
        case 2:
            var mexicoCityTime = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"});
            mexicoCityTime = new Date(mexicoCityTime);
            displayHoraConvertida.innerText = mexicoCityTime.toLocaleTimeString()
            break
        case 3:
            var TokioTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"});
            TokioTime = new Date(TokioTime);
            displayHoraConvertida.innerText = TokioTime.toLocaleTimeString()
            break
        case 4:
            var berlimTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"});
            berlimTime = new Date(berlimTime);
            displayHoraConvertida.innerText = berlimTime.toLocaleTimeString()
            break
    }


}

btnConverter.addEventListener('click',exibirHorarios)