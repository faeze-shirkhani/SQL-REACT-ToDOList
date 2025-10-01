import { Schema, model } from "mongoose";

const toDoListTask = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});

const Task = model("Task", toDoListTask);

export default Task;
