const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/BooksMania",{
   
}).then(()=>{

}).catch((err)=>console.log("no connection"))
