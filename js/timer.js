//! Selector
let min = document.getElementById("min")
let sec = document.getElementById("sec")

let minInput = document.getElementById("minInput")
let secInput = document.getElementById("secInput")

let btnStart = document.querySelector("#btnStart")
let btnReset = document.querySelector("#btnReset")

let errorText = document.getElementById("error")
let successText = document.getElementById("success")

//!Event Listener
minInput.addEventListener('change',() =>{
   if(minInput.value >= 0 ){
        if(minInput.value < 10){
            min.innerHTML = '0' + minInput.value
        }
        else if(minInput.value == "" || minInput.value == 0){
            min.innerHTML = "00"
        }
        else{
            min.innerHTML = minInput.value
        }
    }
    else{
        errorText.style.display = "block"
        setInterval(ErrorText,3000)
    }
})

secInput.addEventListener('change',() =>{
    if(secInput.value > 0 ){
        if(secInput.value < 10){
            sec.innerHTML = '0' + secInput.value
        }
        else if(secInput.value == "" || secInput.value == 0){
            sec.innerHTML = "00"
        }
        else{
            sec.innerHTML = secInput.value
        }
    }
    else{
        errorText.style.display = "block"
        setInterval(ErrorText,3000)
    }

})

btnReset.addEventListener('click',ResetInput)
btnStart.addEventListener('click',StartTimer)

//!Function

function ResetInput(){
    min.innerHTML = "00"
    sec.innerHTML = "00"
    minInput.value = "00"
    secInput.value = "00"

    successText.style.display = "none"
}

function StartTimer(){
    let minute = minInput.value
    let second = secInput.value

    if((minInput.value < 0 || secInput.value < 0) || (minInput.value == "00" && secInput.value == "00")){
        errorText.style.display = "block"
        setInterval(ErrorText,3000)
    }
    else{
        const interval = setInterval(() =>{
            second--
    
            if(second < 0){
                minute--
                second = 59
            }
            
            if(minute < 10  && minute != "00"){
                min.innerHTML = "0" + minute
            }
            else{
                min.innerHTML = minute
            }
    
            if(second < 10){
                sec.innerHTML = "0" + second
            }
            else{
                sec.innerHTML = second
            }
    
            if((min.innerHTML == "00" || min.innerHTML == "0") && (sec.innerHTML == "00" || sec.innerHTML == "0")){
                successText.style.display = "block"
                clearInterval(interval)
            }
        },1000)
    
    }

    
}

function ErrorText(){
    errorText.style.display = "none"
}