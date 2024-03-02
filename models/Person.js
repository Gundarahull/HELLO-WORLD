const mongoose=require('mongoose')

const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'], //only these values
        required:true
    },
    mobilenumber:{
        type:String, 
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:false
    },
    salary:{
        type:Number,
        required:true
    }
})

//creating table
const Person=mongoose.model("Person",personSchema)
module.exports=Person