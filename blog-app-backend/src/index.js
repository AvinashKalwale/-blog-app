const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/blogAppDB', {
    useNewUrlParser: true,
    useUnidefiedTopology: true
}, () => {
    console.log("DB Connected")
});

//schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

//model
const User = new mongoose.model("User", userSchema)

//routes
app.post("/login",(res, req)=>{
    res.send("my data")
})

app.listen(8080, () => {
    console.log("DB connected at port 8080")
})