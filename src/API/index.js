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
    let response = await data.insert({
            "_id": "633b148247d8c165bc16887f",
            "name": "Billboard",
            "imageLinks": "http://books.google.com/books/content?id=pBQEAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            "price": "250$",
            "description": "Billboard remains the world's premier weekly music publication",
            "category": "NewArrivals",
            "isAvailable": "true"
        })  
   // let result = await response.save();
    resp.send(response)
})

app.listen(5000)