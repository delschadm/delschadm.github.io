
const daysE  = document.getElementById("days")
const hoursE = document.getElementById("hours")
const minE   = document.getElementById("mins")
const secE   = document.getElementById("seconds")

function newyear(){
    
    const date = new Date()
    const diffdate = new Date("01.01."+ (date.getFullYear()+1)) - date    
    
    const day     = Math.floor(diffdate / 1000 / 60 / 60 / 24)  
    const hour    = Math.floor(diffdate / 1000 / 60 / 60 % 24)  
    const min     = Math.floor(diffdate / 1000 / 60 % 60) 
    const seconds = Math.floor(diffdate / 1000 % 60)

    daysE.innerHTML  = day      
    hoursE.innerHTML = hour    
    minE.innerHTML   = min     
    secE.innerHTML   = seconds  

}


setInterval(newyear,1000)
