import { getAllTasks, creatNewTask, deleteTask, updateTask } from "../controllers/controllerToDoList.js";
import { Router } from "express";

const router = Router()

router.get("/", getAllTasks)
router.post("/", creatNewTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)

export default(router)