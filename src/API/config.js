const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/BooksMania",{
   
}).then(()=>{
console.log("connection successfully")
}).catch((err)=>console.log("no connection"))
