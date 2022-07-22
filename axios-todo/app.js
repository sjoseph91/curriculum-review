const todoList = document.getElementsByClassName("todoList")[0];
const NAME = "seanj";
const BASE_URL = `https://api.vschool.io/${NAME}/todo`

axios.get( BASE_URL)
    .then(res => {
        displayTodoItems(res.data);
    })
    .catch(err => console.log(err));



function displayTodoItems(todos){
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++){
        const newDiv = createTodoItem(todos[i]);
        todoList.append(newDiv);
    }
}

function createTodoItem(obj){
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoItem");
    todoDiv.id = obj._id;
    if (obj.completed){
        todoDiv.classList.add("completed");
    }

    const titleDiv = document.createElement("div");
    titleDiv.textContent = obj.title;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = obj.description;

    const priceDiv = document.createElement("div");
    priceDiv.textContent = obj.price;

    const image = document.createElement("img");
    if (obj.imgUrl){
        image.src = obj.imgUrl;
    }else{
        image.src = "";
        image.alt = "No image";
    }

    todoDiv.append(titleDiv, descriptionDiv, priceDiv, image)

    return todoDiv;


}





