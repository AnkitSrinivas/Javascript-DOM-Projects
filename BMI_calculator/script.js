

const form = document.getElementById("form")
const result = document.getElementById("results")

const height = document.getElementById("height")
const weight = document.getElementById("weight")


form.addEventListener('submit',(e)=>{
    let text
    e.preventDefault()
    if((height.value=='' || isNaN(height.value) || height.value<0) || (weight.value=='' || isNaN(weight.value) || weight.value<0)) {
       text="Invalid height or weight"
       result.style.backgroundColor='red'
    }else{
        const res=Math.round((weight.value) / ((height.value / 100) * (height.value / 100)))
        text=`BMI for the input weight and height is ${res}`
        result.style.backgroundColor='green'
    }

    result.textContent=text
})