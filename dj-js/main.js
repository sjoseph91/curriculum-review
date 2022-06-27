const box = document.getElementById("box");

//box and window event listeners

box.addEventListener("pointerover", () => {
    box.style.backgroundColor = "blue";
})
box.addEventListener("mousedown", () => {
    box.style.backgroundColor = "red";
})
box.addEventListener("mouseup", () => {
    box.style.backgroundColor = "yellow";
})
box.addEventListener("dblclick", () => {
    box.style.backgroundColor = "green";
})

window.addEventListener("scroll", () => {
    box.style.backgroundColor = "orange";
})

//keydown event listeners

document.addEventListener("keydown", (event) => {
    switch(event.key){
        case "r":
            box.style.backgroundColor = "red";
            break;
        case "o":
            box.style.backgroundColor = "orange";
            break;
        case "g":
            box.style.backgroundColor = "green";
            break;
        case "y":
            box.style.backgroundColor = "yellow";
            break;
        case "b":
            box.style.backgroundColor = "blue";
            break;
        
    }
})

