const mongoose = require("mongoose");

const ExpenseModel = new mongoose.Schema({
     title:{

     }
})

module.exports = mongoose.model("Expense", ExpenseModel);