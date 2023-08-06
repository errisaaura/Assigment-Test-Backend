
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017/birthday_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', (error)=> console.log(error));
db.once('open', () => console.log('Database Connected'))

//middleware
app.use(cors())
app.use(express.json())
app.use("/v1/user", userRoutes)




app.listen('8080', () => console.log('Server Running at port 3000'))
