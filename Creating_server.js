//creating server man
//somewhat cool

const server = require('express')
const app = server()

const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json()) //it goes ad req.body

app.get('/', (req, res) => {
    res.send("Hi welcome to the server man")
})

const personRoutes = require('./routes/PersonRoutes')
app.use(personRoutes)
const menuRoutes = require('./routes/MenuRoutes')
app.use(menuRoutes)


app.get('/f50', (req, res) => {
    res.send("THEY ARE LOSERS");
})

app.get('/rabiya', (req, res) => {
    res.send("SHE IS PRINCESS")
})

app.listen(1111, () => {
    console.log("server STRT");
})