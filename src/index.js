let express = require('express')
let app = express()
let clientRoute = require('./routes/client')
let hotelRoute = require('./routes/hotel')
let path = require('path')
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
    })

// app.use(clientRoute)
app.use(hotelRoute)
app.use(express.static('public'))

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})

// check if someone early define port variable, else use 3000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))