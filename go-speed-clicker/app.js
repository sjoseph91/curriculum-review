const button = document.querySelector("#clicker");
const reset = document.getElementById("reset");
const clickDisplay = document.getElementById("numClicks");
const timerDiv = document.getElementById("timer");
let count;
let lastCount = localStorage.getItem("clicks");

if (Number(lastCount) > 0){
    count = Number(lastCount);
}
else count = 0;

//timer
const TIMER_VALUE = 5000;
let seconds = Math.floor( TIMER_VALUE / 1000 );
timerDiv.textContent = seconds;
let intervalID = setInterval(() => {
    if (seconds > 0){
        seconds--;
        timerDiv.textContent = seconds;
    }
}, 1000)

const timeoutId = setTimeout(() => {
    clearInterval(intervalID)
    timerDiv.textContent = "Time's Up!";
    button.removeEventListener("click", handleButtonClick);
    button.classList.toggle("cancelled");
    
}, 5000)



clickDisplay.textContent = count;
    

button.addEventListener("click", handleButtonClick)

function handleButtonClick(){
    count++;
    clickDisplay.textContent = count;
    localStorage.setItem("clicks", count);
}

reset.addEventListener("click", () => {
    count = 0;
    clickDisplay.textContent = count;
    localStorage.removeItem("clicks");
    button.classList.toggle("cancelled");
    
})