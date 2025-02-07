const mongoose = require("mongoose");


const Member = new mongoose.Schema({

    memberId:{
        type:String,
        required:true
    },
    memberName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    joinDate:{
        type:Date,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    referenceDetails:{
        type:String,
        required:true
    },
    aboutMember:{
        type:String,
        required:false
    }
})


const memberModel = mongoose.model("memberMg",Member);
module.exports = memberModel;