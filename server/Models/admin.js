const mongoose=require('mongoose');

const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    adminID:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{collection:'Admin',timestamps:true});

const Admin=mongoose.model('Admins',adminSchema);

module.exports =Admin;