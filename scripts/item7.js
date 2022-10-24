const btnComparar = document.getElementById('btnComparar')
const labelMenorNumero = document.getElementById('displayMenorNumero')
const num1Elem = document.getElementById('num1')
const num2Elem = document.getElementById('num2')
const num3Elem = document.getElementById('num3')


function encontrarMenorNumero(){

    const num1 = parseInt(num1Elem.value)
    const num2 = parseInt(num2Elem.value)
    const num3 = parseInt(num3Elem.value)

    const nums = [num1,num2,num3]
    let menorNumero=Number.MAX_SAFE_INTEGER;
    for(let i=0;i<nums.length ;i++){
        if(nums[i]<menorNumero){
            menorNumero=nums[i]
        }
    }

    labelMenorNumero.innerText=menorNumero;
}

btnComparar.addEventListener('click',encontrarMenorNumero)