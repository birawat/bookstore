


const express = require("express") 
const cors = require('cors');
require('./config')

//const Books = require('./model/BooksSchema')
const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());

//link the router file
  app.use(require('./router/auth'));
 //app.get('/getAllBooks',async (req,resp)=>{
//     let data = await Model.find();
//  resp.set('Access-Control-Allow-Origin', '*');
// resp.send(data)
//  })
// app.post("/createNewBook",async(req,resp)=>{
//     let data = await dbConnection()
    // resp.set("Access-Control-Allow-Origin", "*")
    // let response = await data.insert({
    //         "_id": "633b148247d8c165bc168871",
    //         "name": "Billboards",
    //         "imageLinks": "http://books.google.com/books/content?id=pBQEAAAAMBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    //         "price": "200$",
    //         "description": "Billboard remains the world's premier weekly music publication",
    //         "category": "BoxSets",
    //         "isAvailable": "true"
    //     })  
   // let result = await response.save();
  //  resp.send(response)
//     const {bname,booksImage,category,description,price} = req.body;
    
// })

app.listen(5000)