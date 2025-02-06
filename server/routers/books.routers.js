const express = require("express");
const bookMg = require("../models/books.Models");

const router = express.Router();

// ! Book data save
router.post("/libraryBk/bookSave",async(req,res)=>{
    console.log("Received Data: ",req.body)

    try{
        let bookSave = new bookMg(req.body);
        await bookSave.save();
        return res.status(200).json({
            success: "Book is saved successfully",
        })
    }catch(err){
        return res.status(400).json({
            error:err,
        })
    }
})


// ! update book by ID
router.put("/libraryBk/bookUpdate/:id",async(req,res)=>{
    try{
        const updateBook = await bookMg.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        );
        if(!updateBook){
            return res.status(400).json({
                message:"books not found"
            })
        }

        return res.status(200).json({
            success:"books updated successfully",
            content:updateBook
        })
    }

    catch(err){
        return res.status(400).json({
            error:err.message
        })
    }
})

//! get all books 
router.get("/libraryBk/getAllBooks",async(req,res)=>{
    try{
        const getAllBooks = await bookMg.find().exec();
        return res.status(200).json({
            success:true,
            content:getAllBooks,
        })
    }catch(err){
        return res.status(400).json({
            error:err,
        })
    }
})

// ! Delete books by ID
router.delete("/libraryBk/deleteBook/:id",async(req,res)=>{
    try{
        const deleteBook = await bookMg.findByIdAndDelete(req.params.id)
        if(!deleteBook){
            return res.status(404).json({
                message:"Book is not found"
            })
        }
        return res.json({
            message:"Book is delete successfully"
        })
    }catch(err){
        return res.status(400).json({
            message:"book delete unsuccessful",
            error:err
        })
    }
})

//! get Book by ID
router.get("/libraryBk/getBookID/:id",(req,res)=>{
    const id = req.params.id;
    bookMg.findById(id)
    .then(bookMg =>{
        if(!bookMg){
            return res.status(404).json({error: "Book not found"})
        }
        res.json(bookMg);
    })
    .catch(err=>{
        console.error("Error fetching book: ",err);
        res.status(500).json({error:"Sever error"})
    })
})

// ! Get Book By Name
router.get("/libraryBk/getBookByName/:name",async(req,res)=>{
    const bookName = req.params.name;

   try{
    const books = await bookMg.find({bookName: {$regex: new RegExp(bookName,"i")}});

    if(books.length === 0){
            return res.status(404).json({error: "No books found with that name"})
    }
    res.json(books);
   }
   catch(err){
    console.error("Error fetching books ",err);
    res.status(500).json({error: "Server error"})
   }
})



module.exports = router;