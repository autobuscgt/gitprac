const express = require('express')
const PORT = 3100

const app = express()

app.use(express.json())

app.listen(PORT, () => console.log(`Server start no ${PORT}`))
