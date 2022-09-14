const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(morgan("dev"))

//connecting to db
mongoose.connect(
    "mongodb://localhost:27017/crud-store", 
    () => console.log("Connected to the DB")
)
//routing
app.use("/inventory", require("./routes/inventory.js"))


app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Server is listening on port 9000");
})