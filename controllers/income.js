const IncomeSchema = require("../models/incomeModels")

exports.addIncome = async (req, res) => {
     const {title, amount, category, description, date} = req.body;

     const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,

     })

     try{
        // validation
        if(!title || !category || !description)
        res.status(400).json({message: "All fields are required"})

        if(amount <= 0 ||!amount === "number")
        res.status(400).json({message: "Amount must be a positive number"})

        income.save()
        res.status(200).json({message: "Income added"})

            
     }catch(error){
        res.status(500).json({message: "Server error"})
     }

    //  console.log(income)
}

exports.getIncomes = async (req, res) => {
   
  try{
    const incomes = await IncomeSchema.find().sort({created_at: -1})
    res.status(200).json(incomes)
  }catch(error){
   res.status(500).json({message:"server error"})
  }

}


exports.deleteIncome = async (req, res) => {
    const {id} = req.params
    console.log(req.params)
    IncomeSchema.findByIdAndDelete(id) 
    .then((income) => res.status(200).json({message: "Income Deleted"}))
    .catch((err) => res.status(500).json({message: err.message}))
}