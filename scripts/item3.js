const descricaoElem = document.getElementById('descricao');
const cidadesElem = document.getElementById('cidades');

const descricoes = [
'São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554',
'São Carlos é um município brasileiro localizado no interior do estado de São Paulo, na região Centro-Leste, e a uma distância rodoviária de 231 quilômetros da capital paulista. Sua população estimada pelo IBGE para 1.º de julho de 2021 era de 256 915 habitantes, distribuídos em uma área total de 1 136,907 km².',
'São José do Rio Preto é um município brasileiro localizado no interior do estado de São Paulo, sede da Região Metropolitana de São José do Rio Preto, que conta com 37 municípios e foi criada pelo Projeto de Lei Complementar 15/2021.',
`Santa Fé do Sul é um município brasileiro do estado de São Paulo. Fundada em 24 de junho de 1948, localiza-se a uma latitude 20º12'40" sul e a uma longitude 50º55'33" oeste, estando a uma altitude de 370 metros. Tem população de 30.872 habitantes e área de 208,2 km`,
'Belo Horizonte é a capital do estado de Minas Gerais, no sudeste do Brasil. Rodeada de montanhas, a cidade é conhecida pelo enorme Estádio Mineirão. Construído em 1965, o estádio alberga também o Museu Brasileiro do Futebol. Nas proximidades encontra-se a Lagoa da Pampulha e o Conjunto Arquitetónico da Pampulha, que inclui a Igreja de São Francisco de Assis, cujo teto é ondulado e que foi concebida pelo arquiteto modernista brasileiro Oscar Niemeyer'
]

function exibirDescricao(){
    if(!isNaN(cidadesElem.value) &&  parseInt(cidadesElem.value) <=descricoes.length){
        descricaoElem.innerText = descricoes[parseInt(cidadesElem.value)]
    }
    else{
        descricaoElem.innerText = ''
    }
}

cidadesElem.addEventListener('change',exibirDescricao)