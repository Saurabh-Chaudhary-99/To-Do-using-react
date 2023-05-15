const { Router } = require("express");

const { getTodo, saveTodo, deleteTodo, updateTodo } = require("./controller");

const todoRouter = Router();

todoRouter.get("/", getTodo);

todoRouter.post("/save", saveTodo);

todoRouter.post("/update", updateTodo);

todoRouter.post("/delete", deleteTodo);

module.exports = todoRouter;