import Task from "../model/schema.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.log("faild in getting tasks");
    res.status(401).json({ error: err });
  }
};

const creatNewTask = async (req, res) => {
    const {title, completed} = req.body
  try {
    const task = await Task.create({title, completed});
    res.status(200).send(task);
  } catch (err) {
    console.log("faild in creating new task", err);
    res.status(401).json({ error: err });
  }
}

const deleteTask = async (req, res) => {
    const {id} = req.params
  try {
    const deleted = await Task.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (err) {
    console.log("faild in deleteing task");
    res.status(401).json({ error: err });
  }
}


const updateTask = async(req, res) => {
    const {id} = req.params
    const {title, completed, isEditing} = req.body
  try {
    const updated = await Task.findByIdAndUpdate(id, {title, completed, isEditing});
    res.status(200).json(updated);
  } catch (err) {
    console.log("faild in updating task");
    res.status(401).json({ error: err });
  }
}

export {getAllTasks, creatNewTask, deleteTask, updateTask}