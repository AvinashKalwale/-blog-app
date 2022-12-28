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
// app.get("/",(req,res)=>{
//     res.send("my data")
// })

app.post("/login",(req,res)=>{
    const {email, password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login success", user:user})
            }else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"User not registered"})
        }
    })
    res.send("my data")
})

app.post("/signup",(req,res)=>{
    // res.send("my data from signup")
    console.log(req.body);
})
app.listen(8080, () => {
    console.log("DB connected at port 8080")
})