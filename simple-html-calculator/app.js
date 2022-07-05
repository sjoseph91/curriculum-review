const addForm  = document["add-form"];
const subtractForm  = document["subtract-form"];
const multiplyForm  = document["multiply-form"];
const resetBtn = document.getElementById("reset");

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = +addForm.add1.value + +addForm.add2.value;
    
    e.target.nextElementSibling.textContent = answer;
})

subtractForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = +subtractForm.sub1.value - +subtractForm.sub2.value;
    
    e.target.nextElementSibling.textContent = answer;
})

multiplyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let answer = +multiplyForm.mul1.value * +multiplyForm.mul2.value;
    
    e.target.nextElementSibling.textContent = answer;
})

resetBtn.addEventListener("click", (e) => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    })
    const answers = document.querySelectorAll(".answer");
    answers.forEach(answer => {
        answer.textContent = "";
    })
})