const mongoose = require("mongoose");
const {connect} = mongoose;
require("dotenv").config({path:"../.env"})

const connectDB = async()=>{
    try {
        await connect(process.env.MONGO_URI)
        console.log("Database connected... ")
    } catch (error) {
        console.log(error)
    }
} 
module.exports = connectDB