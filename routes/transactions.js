const { addIncome, getIncomes, deleteIncome } = require("../controllers/income");
const {addExpenses, getExpenses} = require("../controllers/expense")

const router = require("express").Router()

router.post("/add-income", addIncome)
router.get("/get-incomes", getIncomes)
router.delete("/delete-income/:id", deleteIncome)

// expenses
router.post("/add-expenses", addExpenses)
router.get("/get-expenses", getExpenses)

module.exports = router;