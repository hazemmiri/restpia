const mongoose = require("mongoose");
const{model , Schema} = mongoose;

const ContactSchema = new Schema({
    name:{type:String , required:true},
    email:{type:String , required:true , unique:true },
    phone:String,

});

module.exports = Contact = model("contacts", ContactSchema);