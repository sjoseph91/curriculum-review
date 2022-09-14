const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory");

//get all
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, products) => {
        if (err){
            res.status(500);
            return next(err);
        }
        res.status(200).send(products);
    })
})


//get one
inventoryRouter.get("/:id", (req, res, next) => {
    const id = req.params.id;
    Inventory.findById(id, (err, foundProduct) => {
        if (err){
            res.status(500);
            return next(err);
        }
        res.status(200).send(foundProduct);
    })
})

//post
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body);
    newInventory.save((err, savedInventory) => {
        if (err){
            res.status(500);
            return next(err);          
        }
        return res.status(201).send(savedInventory);
    })
})

//put
inventoryRouter.put("/:id", (req, res, next) => {
    const id = req.params.id;
    const updates = req.body;
    Inventory.findByIdAndUpdate(
        id,
        req.body,
        {new: true, runValidators: true},
        (err, updatedProduct) => {
        if (err){
            res.status(500);
            return next(err);          
        }
        return res.status(200).send(updatedProduct);
    })
})


module.exports = inventoryRouter;