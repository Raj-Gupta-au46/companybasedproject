const mongoose= require("mongoose")

const customerSchema=  new mongoose.Schema({

    firstName: {type:String, required:true,trim:true},
    lastName :{type:String, required:true, trim:true},
    mobileNumber:{type:String, required:true, trim:true} ,
    DOB :{type:Date, required:true},
   emailID: {type:String, required:true, uniquee:true, trim:true},
   address: {type:String, required:true, trim:true},
   customerID :{type:String, required:true, trim:true},
   status :{type:String ,default:"ACTIVE",trim:true}   
},
{timestamps:true})

module.exports= mongoose.model("Customer",customerSchema)