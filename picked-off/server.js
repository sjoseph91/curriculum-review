const express = require("express");
const app = express();
const addFlammableProperty = require("./middleware")

app.use(express.json());

const jacket = {
    name: "jacket",
    brand: "Old Navy", 
    color: "blue",
    price: 10
}

app.use(addFlammableProperty)

app.get("/jacket", (req, res, next) => {
    console.log(req.flammable);
    res.send(jacket);
})










app.listen(9000, () => {
    console.log("The server is listening on port 9000.");
})