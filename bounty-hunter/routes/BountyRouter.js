const express = require("express");
const BountyRouter = express.Router();
const {v4: uuid} = require("uuid");
const Bounty = require("../models/bounty")

const bounties = [
    {
        firstName: "Anakin",
        lastName: "Skywalker", 
        living: false,
        bountyAmount: 1000,
        type: "sith",
        _id: uuid()
    }, 
    {
        firstName: "Luke",
        lastName: "Skywalker", 
        living: true,
        bountyAmount: 3500,
        type: "jedi",
        _id: uuid()
    },
    {
        firstName: "Padme",
        lastName: "Skywalker", 
        living: true,
        bountyAmount: 70,
        type: "jedi",
        _id: uuid()
    }, 
    {
        firstName: "Darth",
        lastName: "Maul", 
        living: true,
        bountyAmount: 2560,
        type: "sith",
        _id: uuid()
    }
]


BountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err){
                res.status(500);
                return next(err);
            }
            res.status(200).send(bounties);
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, addedBounty) => {
            if (err){
                res.status(500);
                return next(err);
            }else{
                res.status(201).send(addedBounty);
            }
        })

    })


BountyRouter.route("/:id")

    //get one
    .get((req, res) => {
    const id = req.params.id;
    const selectedBounty = bounties.find(bounty => bounty._id === id);
    res.send(selectedBounty);
    })
    .delete((req, res, next) => {
        const id = req.params.id;
        Bounty.findByIdAndDelete(id, (...args) => {
            console.log(args)
            if (err){
                res.status(400);
                return next (err);
            }else{
                //you can send back anything you want.
                res.status(200).send(deletedBounty)
            }
        })
    })
    .put((req, res, next) => {
        const id = req.params.id;
        const updateObject = req.body;
        Bounty.findByIdAndUpdate(id, updateObject, {new: true}, (err, updatedBounty) => {
            if (err){
                res.status(500);
                return next(err)
            }else{
                res.status(201).send(updatedBounty);
            }
        })
    })



module.exports = BountyRouter;