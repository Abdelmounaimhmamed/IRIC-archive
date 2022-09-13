const express = require("express");
const dotenv = require("dotenv")
const app = express()
const Port =  3000 
const path = require("path")
const HomeRouter = require("./routes/route")
const db = require("./models/contact")
const mongoose = require("mongoose")
dotenv.config()
const Typewriter = require("typewriter")

mongoose.connect(process.env.DATA_URI).then(() => {
    console.log("connected to dataBase")
}).catch((err) => {
    console.log(err.message)
})

// middlewares 

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine" , "ejs")
app.use(express.static("./public/"));


// routes 
app.use("/" , HomeRouter)




app.listen(process.env.PORT ||  Port, () => {
    console.log(`-- Application Running on http://localhost:${Port}`);
}) 
