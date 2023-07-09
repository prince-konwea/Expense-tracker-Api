const ExpenseSchema = require("../models/expenseModel")



exports.addExpenses = async (req, res) => {
    const {title, amount, description, category, date} = req.body;
 
     const expense = ExpenseSchema({
         title,
         amount,
         description,
         category, 
         date
     })  

    try{
        // validation 
        if(!title || !description || !category)
            res.status(400).json({message: "All field is required."})
        
        if(amount <= 0 || !amount === "number")
            res.status(400).json({message: "Amount must be a positive number."})
        expense.save()   
         res.status(200).json({message: "expense saved successfully."})

    }catch(error){
      res.status(500).json({message: "Error saving expense"})
    }

}

exports.getExpenses = async (req, res) => {
    try{
      const expenses = await ExpenseSchema.find().sort({created_at: -1})
      res.status(200).json(expenses)
    }catch(error){
      res.status(500).json({message: "Error getting Expenses"})
    }
}