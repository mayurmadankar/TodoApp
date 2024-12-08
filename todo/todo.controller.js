import TodoRepository from "./todo.repository.js";

export default class TodoController {
  constructor() {
    this.todoRepository = new TodoRepository();
  }
  async createTodo(req, res) {
    try {
      const { title } = req.body;

      const result = await this.todoRepository.create(title);

      if (!result) {
        res.status(400).send({
          success: false,
          message: "not able to create the todo"
        });
      } else {
        res.status(200).send({
          success: true,
          message: "succesfully create the todo",
          data: result
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getAllTodo(req,res) {
    try {
      const result = await this.todoRepository.getAllTodo();
      if (!result) {
        res.status(400).send({
          success: false,
          message: "Todos not found"
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Get all todos",
          data: result
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
