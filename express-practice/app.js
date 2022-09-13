const express = require("express");
const app = express();
const mongoose = require("mongoose");


//Middleware
app.use(express.json())

//practice middleware
// app.use("/people", (req, res, next) => {
//     req.body = {name: "hello"};
//     next();
// })
//connecting to db
mongoose.connect('mongodb://localhost:27017/2022moviesdb', 
    () => console.log("Connected to the database"))
    
//routes
app.use("/people", require("./routes/PeopleRouter"));
app.use("/movies", require("./routes/MovieRouter"));

app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(9000, () => console.log("The server is running at port 9000"));

