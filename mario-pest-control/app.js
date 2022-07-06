const GOOMBA_PRICE = 5;
const BOBOMBS_PRICE = 7;
const CHEEP_CHEEP_PRICE = 11;
const goombaInput = document.querySelector("input[name='numGoombas']");
const bobombInput = document.querySelector("input[name='numBobombs']");
const cheepCheepInput = document.querySelector("input[name='numCheepcheeps']");
const resetBtn = document.getElementById("reset");

let total = 0;

const totalPrice = document.getElementById("totalPrice");
totalPrice.textContent = total;

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("change", (e) => {
        e.preventDefault();
        total = addInputs();
        totalPrice.textContent = total;
    })
})
resetBtn.addEventListener("click", (e) => {
    inputs.forEach(input => {
        input.value = 0;
    })
    totalPrice.textContent = 0;
})

function addInputs(){
    let sum = 0;
    sum += ( GOOMBA_PRICE * parseInt( goombaInput.value ) + BOBOMBS_PRICE * parseInt( bobombInput.value ) + CHEEP_CHEEP_PRICE * parseInt(cheepCheepInput.value));
    return sum;
}
