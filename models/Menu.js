//to create the schma we want to use mangoose

const  mongoose = require('mongoose');

const menuschema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    taste:{
        type:String,
        enum:['sweet','sour','spice'], //only these values
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type: [String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const MenuItem=mongoose.model('MenuItem',menuschema) //menuitem name tho menuschema nu manam mongoose tho with help of model

module.exports=MenuItem