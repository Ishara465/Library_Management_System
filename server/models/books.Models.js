const mongoose = require("mongoose");

const Book = new mongoose.Schema({
    bookId:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isbnNumber:{
        type:String,
        required:true
    },
    publishYear:{
        type:Date,
        required:true
    },
    copiesAvailable:{
        type:Number,
        required:true
    },
    bookSummary:{
        type:String,
        required:false
    },
    category:{
        type:String,
        required:true
    },
})

const bookModel = mongoose.model("bookMg",Book);
module.exports = bookModel;