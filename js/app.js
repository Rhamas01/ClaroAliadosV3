AOS.init();


let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 50,    
    speed = 20;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#0097A9 ${progressStartValue * 3.6}deg, #83eefa 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);


let circularProgressb = document.querySelector(".circular-progressb"),
    progressValueb = document.querySelector(".progress-valueb");

let progressStartValueb = 0,    
    progressEndValueb = 40;    
   
    
let progressb = setInterval(() => {
    progressStartValueb++;

    progressValueb.textContent = `${progressStartValueb}%`
    circularProgressb.style.background = `conic-gradient(#ED8500 ${progressStartValueb * 3.6}deg, #f7ba6b 0deg)`

    if(progressStartValueb == progressEndValueb){
        clearInterval(progressb);
    }    
}, speed);


