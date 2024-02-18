const express = require('express')
const { getAllTasks, addNewTask, getTask, deleteTask, updateTask } = require('../controllers/tasksController')

const tasksRouter = express.Router()


tasksRouter.get("/tasks", getAllTasks)
tasksRouter.post("/add", addNewTask)
tasksRouter.get("/tasks/:title", getTask)
tasksRouter.delete("/tasks/:title", deleteTask)
tasksRouter.patch("/tasks/:title", updateTask)


module.exports = { tasksRouter }