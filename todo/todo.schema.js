import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completeORnot: {
    type: Boolean,
    default: false
  }
});

const ToDoModel = mongoose.model("Todo", TodoSchema);

export default ToDoModel;
