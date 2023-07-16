//Establish the connection 
//Start our server which will listen for HTtp request at port number 8080


const mongoose = require('mongoose')
//establish Db connection 

mongoose.connect("mongodb://127.0.0.1:27017/exam_db")
const db = mongoose.connection
db.on("error",()=>{
    console.log("Error while connecting the Db ")
})
db.once("open",()=>{
    console.log("connection to mongoDb")
})
