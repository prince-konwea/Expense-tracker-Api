const { addIncome, getIncomes, deleteIncome } = require("../controllers/income");
const {addExpenses} = require("../controllers/expense")

const router = require("express").Router()

router.post("/add-income", addIncome)
router.get("/get-incomes", getIncomes)
router.delete("/delete-income/:id", deleteIncome)

// expenses
router.post("/add-expenses", addExpenses)

module.exports = router;