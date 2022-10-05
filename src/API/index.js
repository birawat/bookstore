 const dbConnection = require('./mongodb')

// const insert = async() =>{
// const db = await dbConnection();
// }
// insert();
const express = require("express")
require('./config')
const Model = require('./model')

const app = express();
app.use(express.json())

app.get('/getAllBooks',async (req,resp)=>{
    let data = await Model.find();
 //   console.log(data)
 resp.set('Access-Control-Allow-Origin', 'http://localhost:3000');
resp.send(data)
})
app.post("/createNewBook",async(req,resp)=>{
    let data = await dbConnection()
    let response = await data.insertOne({
            "_id": "633b148247d8c165bc16886d",
            "name": "How to Read a Books",
            "imageLinks": "http://books.google.com/books/content?id=3QOZBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "price": "250$",
            "description": "Analyzes the art of reading",
            "isAvailable": "false"
        })  
   // let result = await response.save();
    resp.send(response)
})

app.listen(5000)