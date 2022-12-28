const express=require('express')
const app =express();
const mongoose=require('mongoose')
const cors=require('cors')
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/blogAppDB',{
    useNewUrlParser:true,
    useUnidefiedTopology:true
},()=>{
    console.log("DB Connected")
});

app.listen(8080,()=>{
console.log("DB connected at port 8080")
})