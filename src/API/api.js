const express = require('express')
const dbConnection = require('./mongodb')
 const Book = require('../API/model')

const app = express();
const mongo = require("mongodb")
app.use(express.json())

app.get('/getAllBooks',async (req,resp)=>{
    let data = await dbConnection();
    data = await data.find().toArray()
 
resp.send(data)
})

// app.post('/',async (req,resp)=>{
//     let data =await dbConnection()
//     let result = await data.insertMany(req.body)
//     resp.send(result)
// })

app.post('/createNewBook',async (req,resp)=>{
    let data = await dbConnection()
     const book = new Book({
        _id:new mongo.Types.ObjectId(),
        name:req.body.name,
        imageLinks: req.body.imageLinks,
        price: req.body.number,
        description: req.body.description,
        isAvailable: req.body.isAvailable
     })
     book.save()
     .then(result=>{
    
        resp.status(200).json({
            newBook:result
        })
    })
    .catch(err =>{
       
        resp.status(500).json({
            error:err
        })
    })


//  let result = await data.insertOne({
//     "_id": "633b148247d8c165bc16886c",
//     "name": "How to Read a Books",
//     "imageLinks": "http://books.google.com/books/content?id=3QOZBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//     "price": "250$",
//     "description": "Analyzes the art of reading",
//     "isAvailable": "false"
// })  
//  resp.send(result)
})

app.listen(8003)
