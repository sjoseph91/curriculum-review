const todoList = document.getElementsByClassName("todoList")[0];
const NAME = "seanj";
const BASE_URL = `https://api.vschool.io/${NAME}/todo`


//gets all Todos on page load
axios.get( BASE_URL)
    .then(res => {
        displayTodoItems(res.data);
    })
    .catch(err => console.log(err));


//post functionality
document.todoForm.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    const {title, description, price, imgUrl} = document.todoForm;
    const newTodo = {
        title: title.value,
        description: description.value,
        price: +price.value,
        imgUrl: imgUrl.value
    };
    console.log(newTodo);
    axios.post( BASE_URL, newTodo)
        .then(res => {
            const newDiv = createTodoItem(res.data);
            todoList.append(newDiv);
        })
        .catch(err => console.log(err));
}


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
   

    const chkbox = document.createElement("input");
    chkbox.type = "checkbox";

    chkbox.onchange = handleCheckboxChange;

     if (obj.completed){
        todoDiv.classList.add("completed");
        chkbox.checked = true;
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
    const delBtn = document.createElement("button");
    delBtn.classList.add("deleteButton");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", handleDelete);
    

    todoDiv.append(chkbox, titleDiv, descriptionDiv, priceDiv, image, delBtn)

    return todoDiv;


}

//handles Checkbox change and PUT request
function handleCheckboxChange(e){
    const id = e.target.parentNode.id;
    e.target.parentNode.classList.toggle("completed");


    if (e.target.checked){
        axios.put(BASE_URL + `/${id}`, {completed: true})
            .then()
            .catch(err => console.log(err));
    }else{
        axios.put(BASE_URL + `/${id}`, {completed: false})
            .then()
            .catch(err => console.log(err));
    }
}

//handles Deletebtn request and DELETE request
function handleDelete(e){
    const id = e.target.parentNode.id;
    axios.delete(`${BASE_URL}/${id}`)
        .then(res => {
            e.target.parentNode.remove();
        })
        .catch(err => console.log(err));
}




