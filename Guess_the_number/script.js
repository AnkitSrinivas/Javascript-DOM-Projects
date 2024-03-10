let randomNumber =parseInt(Math.random()*100+1)
const MAX_ATTEMPT =10
const body = document.querySelector("body")
const form=document.getElementById("form")
const number=document.getElementById("number")
const btn=document.getElementById("button")
const previousNumber=document.getElementById("previous")

const newElement = document.createElement('p')
let count=0


let enteredNum=[]

function validation(){
    if(randomNumber===parseInt(number.value)){
        newElement.innerHTML="you won"
        endGame() 
        btn.disabled=true
     }else{
        newElement.innerHTML=`invalid number ${number.value} where as random number is ${randomNumber}`
        enteredNum.push(number.value)
        previousNumber.innerHTML+=" "+number.value
     }

    
     number.value=''
     randomNumber =parseInt((Math.random()*100)+1)
     count++
}


function endGame(){
    
        const newElement= document.createElement('h2')
        newElement.innerHTML='Game Over'
        body.appendChild(newElement)
        number.setAttribute('disabled','')
     
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    validation()
    if(count>=MAX_ATTEMPT){
    endGame()
    btn.disabled=true
     }
    })

body.appendChild(newElement)
