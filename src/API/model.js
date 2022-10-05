const mongoose  = require('mongoose');

// const { boolean } = require('yup')
// const { number, string } = require('yup/lib/locale')

const BookSchema = new mongoose.Schema({
    //_id:mongo.Schema.Types.ObjectId,
    // _id:mongo.Schema.Types.ObjectId(),
    _id:Number,
    name:String,
    imageLinks:String,
    price:Number,
    description:String,
    isAvailable:Boolean,
    category:String
})

module.exports = mongoose.model('Books',BookSchema)