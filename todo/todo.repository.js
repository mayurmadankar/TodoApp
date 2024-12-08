import ToDoModel from "./todo.schema.js";

export default class TodoRepository {
  async create(title) {
    // Create a new Todo instance
    const todo = new ToDoModel({
      title,
      completeORnot: true
    });
    return await todo.save();
  }
  async getAllTodo() {
    try {
      const result = await ToDoModel.find();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
