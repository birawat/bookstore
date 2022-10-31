const express = require('express')
const router = express.Router();

require('../config')
// const multer = require('multer')
const AllBooks = require('../model')
router.get('/getAllBooks',async (req,res)=>{

    let data = await AllBooks.find();
      res.setHeader('Access-Control-Allow-Origin', '*');
     res.send(data)
   
})

//storage
// const Storage = multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb)=>{
//         cb(null,file.originalName)
//     }
// })
// const upload = multer({
//     storage:Storage
// }).single('testImage')
router.post('/createNewBook',(req,res)=>{
   
   // res.json({message: req.body});
    const {name,imageLinks,price,description,isAvailable,category} = req.body;

//     // req.set('Access-Control-Allow-Origin', 'http://localhost:5000');
// //     const {_id,name,imageLinks,price,description,isAvailable,category} = req.body;
AllBooks.find()
      const book = new AllBooks({name,imageLinks,price,description,isAvailable,category})
     book.save().then(()=>{
          res.status(201).json({
              message:"books successfully saved"
         })
      })

    })
module.exports = router;