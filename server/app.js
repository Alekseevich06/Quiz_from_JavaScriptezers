const express = require('express');
const removeHeaders = require('./middleware/removeHeaders')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(removeHeaders)

const indexRouter = require('./routes/index.routes')
app.use('/api', indexRouter)

app.listen(PORT, ()=> {
    console.log(`Сервер запущен на порту ${PORT}`);
})