const mongoose = require("mongoose")

const db = async () => {
    try{
      mongoose.set("strictQuery", false)
      await mongoose.connect(process.env.dbUrl)
      console.log("Db connected successfully")
    }catch(error){
       console.log("Db connection error")
    }
}

module.exports = {db}