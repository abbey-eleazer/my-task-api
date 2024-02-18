const express = require('express')
const {tasksRouter} = require('./routes/tasksRoutes')
// const {tasksCtrl} = require('./controllers/tasksController')
const app = express()

const PORT = 8000

app.use(express.json())


app.get('/', (req, res) => {
  res.json({
    Message: `Api running on port 8000. visit http://localhost:${PORT}`,
  })
})

app.use('/', tasksRouter)


app.listen(PORT, () => { console.info( `server listen on port http://localhost:${PORT}`) } )