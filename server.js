const express = require('express');
require("dotenv").config();
const connectDB = require("./config/connectDB")

const contactRouter = require('./router/contactRouter')
const app = express();
connectDB();
const PORT = process.env.PORT || 6052
app.use(express.json())
app.use("/api/contact" , contactRouter)
app.listen(PORT , (err)=>
err? console.log(err):
console.log(`server is running on port ${PORT}`)
)