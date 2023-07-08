require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { db } = require("./db/db")
const {readdirSync} = require("fs")


const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes
readdirSync("./routes").map((route) => app.use("/api/v1", require("./routes/" + route)))
const port = process.env.PORT

const server = () => {
    db()
    app.listen(port, console.log(`Server is running on ${port}`))
}

server()