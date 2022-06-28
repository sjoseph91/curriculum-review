const form = document.addItem;
const list = document.getElementById("list");

form.addEventListener("submit", e => {
    e.preventDefault();

    //creating elements
    const newItem = document.createElement("li");
    const newDiv = document.createElement("div");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    //delete button functionality
    delBtn.addEventListener("click", handleDelete);

    newDiv.textContent = form.title.value;
    editBtn.textContent = "edit";
    delBtn.textContent = "X";
    newItem.append(newDiv, editBtn, delBtn);
    list.append(newItem);

    form.title.value = "";

})


function handleDelete(e){
    e.target.parentNode.remove();
}