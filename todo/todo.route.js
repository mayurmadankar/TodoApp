import express from "express";
import TodoController from "./todo.controller.js";

const TodoRouter = express.Router();
const todoController = new TodoController();

TodoRouter.post("/", (req, res) => {
  todoController.createTodo(req, res);
});
TodoRouter.get("/get", (req, res) => {
  todoController.getAllTodo(req, res);
});
export default TodoRouter;
