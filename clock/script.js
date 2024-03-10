const clock=document.getElementById("clock")

setInterval(function(){
    const date = new Date()
    clock.innerHTML = date.toLocaleString()
},1000)