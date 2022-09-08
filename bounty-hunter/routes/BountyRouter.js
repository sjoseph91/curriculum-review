const express = require("express");
const BountyRouter = express.Router();
const {v4: uuid} = require("uuid");

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
    .get((req, res) => {
        //get by type
        const hasQueryString = (Object.keys(req.query).length !== 0);
        
        if (hasQueryString){
            const type = req.query.type;
            const selectedBounties = bounties.filter(bounty => bounty.type === type);
            res.send(selectedBounties);
        }else{
            res.send(bounties);
        }
    })
    .post((req, res) => {
        const newBounty = {...req.body, _id: uuid()};
        bounties.push(newBounty);
        res.send(`Bounty ${newBounty.firstName} was added to the database.`)

    })

//get one
BountyRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const selectedBounty = bounties.find(bounty => bounty._id === id);
    res.send(selectedBounty);
})



module.exports = BountyRouter;