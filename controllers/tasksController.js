let tasks = [
  {
    "title": "read",
    "createdAt": new Date(),
    "completed": false
  },
  {
    "title": "code",
    "createdAt": new Date(),
    "completed": false
  },
  {
    "title": "draw",
    "createdAt": new Date(),
    "completed": false
  },
  {
    "title": "cook",
    "createdAt": new Date(),
    "completed": false
  },
  {
    "title": "practice",
    "createdAt": new Date(),
    "completed": false
  },
]

const getAllTasks = (req, res) => {

  res.json({ tasks })
}

const addNewTask = (req, res) => {

  // res.json({ data: req })

  let {title, createdAt, completed} = req.body

  const task = {
    title,
    createdAt,
    completed
  }
  tasks.push(task)
  res.status(201).json({ tasks })
}

const getTask = (req, res) => {
  const { title } = req.params

  const task = tasks.find((task) => task.title === title)
  if (task) {
    res.json(task)
  } else {
    res.status(404).json({ message: "Not Found"})
  }
}

const deleteTask = (req, res) => {
  const {title} = req.params

  const task = tasks.find((task) => task.title === title)
  if (task) {
    tasks.splice(tasks.indexOf(task),1)
    res.json({ message: "Task Deleted"})
  } else {
    res.status(404).json({ message: "Not Found"})
  }
}

const updateTask =(req, res) => {
  const {title} = req.params
  const task = tasks.find((task) => task.title === title)
  if (task) {
    tasks.splice(tasks.indexOf(task),1)
    res.json({ message: "Task Deleted"})
  } else {
    res.status(404).json({ message: "Not Found"})
  }
}





module.exports = { getAllTasks, addNewTask, getTask, deleteTask, updateTask }