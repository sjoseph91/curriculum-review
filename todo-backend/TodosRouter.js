const express = require("express");
const TodosRouter = express.Router();
const {
    todos, 
    getAllTodos, 
    getOneTodo, 
    addTodo, 
    updateTodo,
    deleteTodo 
    } = require("./TodoDatabase");

TodosRouter.route("/")
    .get((req, res) => {
        res.send(getAllTodos());
    })
    .post((req, res) => {
        const newTodo = addTodo(req.body);
        res.send(newTodo);
    })

TodosRouter.route("/:id")
    .get((req, res) => {
        const id = req.params.id;
        const selectedTodo = getOneTodo(id);
        res.send(selectedTodo);
    })
    .put((req, res) => {
        const id = req.params.id;
        const updatedTodo = updateTodo(id, req.body);
        res.send(updatedTodo);
    })
    .delete((req, res) => {
        const id = req.params.id;
        deleteTodo(id);
        res.send(`Todo ${id} successfully deleted`);
    })




module.exports = TodosRouter