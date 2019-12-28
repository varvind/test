if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}



const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/users')



app.set('view engine', 'ejs')
app.set ('views', __dirname + '/views')


app.use(express.static('public'))
app.use(express.static('views'))
app.use(bodyParser.urlencoded({limit:'10mb', extended : false}))

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose'))

app.post("/adduser",  async (req, res) => {
    var data = new User(req.body)
    try{
        const newUser = await data.save()
        res.redirect('./views/index.html')
    }catch {
        console.log("Cannot save to database")
    }
})

app.listen(process.env.PORT || 3000)