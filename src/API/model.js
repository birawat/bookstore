const mongoose  = require('mongoose');

// const { boolean } = require('yup')
// const { number, string } = require('yup/lib/locale')

const BookSchema = new mongoose.Schema({
    //_id:mongo.Schema.Types.ObjectId,
    // _id:mongo.Schema.Types.ObjectId(),
    
    name:{
        type:String,
     
        },
    imageLinks:{
        type:String,
       
        },
    price:{
        type:String,
     
        },
    description:{
        type:String,
       
        },
    isAvailable:{
        type:Boolean,
    
        },
    category:{
        type:String,
     
        },
})

const AllBooks= mongoose.model('AllBooks',BookSchema)
module.exports = AllBooks;
