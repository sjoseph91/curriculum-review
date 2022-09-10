const {v4: uuid} = require("uuid");

const todos = [
    {
        name: "Do the dishes", 
        description: "Put soap on spounge and move it around",
        imageUrl: "https://media.istockphoto.com/photos/keeping-kids-busy-picture-id1311195899?s=612x612",
        completed: false,
        _id: uuid()
    },
    {
        name: "Take out trash", 
        description: "Put trash in garbage can",
        imageUrl: "https://i.ebayimg.com/images/g/vdMAAOSwmTFhiiq6/s-l500.jpg",
        completed: false,
        _id: uuid()
    },
    {
        name: "Go to grocery", 
        description: "Put soap on spounge and move it around",
        imageUrl: "https://hoodline.com/2019/11/the-4-best-grocery-stores-in-long-beach/",
        completed: false,
        _id: uuid()
    },
]

function getAllTodos(){
    return todos;
}

function getOneTodo(id){
    return todos.find(todo => todo._id === id);
}

function addTodo(newTodoData){
    const newTodo = {...newTodoData, _id: uuid()};
    todos.push(newTodo);
    return newTodo;
}

function updateTodo(id, newUpdates){
    const oldTodo = todos.find(todo => todo._id === id);
    const updatedTodo = Object.assign(oldTodo, newUpdates);
    return updatedTodo;
}

function deleteTodo(id){
    const todoIndex = todos.findIndex(todo => todo._id === id);
    todos.splice(todoIndex, 1);
}

module.exports = {todos, getAllTodos, getOneTodo, addTodo, updateTodo, deleteTodo }