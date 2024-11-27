let minute = document.querySelector(".min");
let second = document.querySelector(".sec");

let startBtn = document.querySelector(".green");
let stopBtn = document.querySelector(".red");
let resetBtn = document.querySelector(".gray");

let secIs = 60; 
let minIs = 25;  
let timer;

startBtn.addEventListener("click", () => {
   
    timer = setInterval(() => {
        if (secIs === 0) {  
            if (minIs > 0) {
                minIs--;  
                secIs = 59;  
            } else {
                clearInterval(timer);
            }
        } else {
            secIs--;  
        }

        
        minute.textContent = minIs.toString().padStart(2, "0");
        second.textContent = secIs.toString().padStart(2, "0");

    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
    clearInterval(timer);  
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer)
    secIs = 60;
    minIs = 25;
    minute.textContent = "25";
    second.textContent = "00";

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
});
