const mongoose=require("mongoose")
let dbConnect =async () => {
  await mongoose.connect('mongodb://localhost:27017/mybackend')
  .then(()=>console.log("connected"))
  .catch(()=>console.log("error"));
    
  };
  
  module.exports = { dbConnect};