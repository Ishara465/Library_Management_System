const express = require("express")
const memberMg = require("../models/member.models")

const router = express.Router();

// ! Member data save
router.post("/libraryBk/memberSave",async(req,res)=>{
    console.log("Received Data: ",req.body)

    try{
        let memberSave = new memberMg(req.body);
        await memberSave.save();
        return res.status(200).json({
            success:"member is saved successfully"
        })
    }catch(err){
        return res.status(400).json({
            error:err
        })
    }
})


// ! update member by ID
router.put("/libraryBk/memberUpdate/:id",async(req,res)=>{
    try{
        const updateMember = await memberMg.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        )
        if(!updateMember){
            return res.status(400).json({
                message:"Member not found"
            })
        }

        return res.status(200).json({
            success:"member updated successfully",
            content:updateMember
        })
    }
    catch(err){
        return res.status(400).json({
            error:err.message
        })
    }
})

// ! get all member

router.get("/libraryBk/getAllMembers",async(req,res)=>{
    try{
        const getAllMembers = await memberMg.find().exec();
        return res.status(200).json({
            success:true,
            content:getAllMembers
        })
    }catch(err){
        return res.status(400).json({
            error:err
        })
    }
})

// ! delete member by ID

router.delete("/libraryBk/deleteMember/:id",async(req,res)=>{
    try{
        const deleteMember = await memberMg.findByIdAndDelete(req.params.id)
        if(!deleteMember){
            return res.status(404).json({
                message:"Member is not found"
            })
        }
        return res.json({
            message:"Member is delete successfully"
        })
    }catch(err){
        return res.status(400).json({
            message:"Member delete unsuccessfully",
            error:err
        })
    }
})


// ! get member by ID
router.get("/libraryBk/getMemberID/:id",(req,res)=>{
    const id = req.params.id;
    memberMg.findById(id)
    .then(member =>{
        if(!member){
            return res.status(400).json({error:"Member not found"})
        }
        res.json(member)
    })
    .catch(err=>{
        console.error("Error fetching Member: ",err)
        res.status(500).json({error:"Server error"})
    })
})

// ! Get Member By Name
router.get("/libraryBk/getMemberByName/:name",async(req,res)=>{

    const memberName = req.params.name;

    try{
        const member = await memberMg.find(
            {memberName:{$regex: new RegExp(memberName,"i")}}
        )
        if(member.length === 0){
            return res.status(400)
            .json(
                {error:"No member with that name"}
            )
        }
        res.json(member);
    }
    catch(err){
        console.error("Error fetching Member ",err);
        res.status(500).json(
            {error:"Server error"}
        )
    }
})

module.exports = router;



