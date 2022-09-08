const express = require("express");
const PeopleRouter = express.Router();
const {v4: uuid} = require("uuid")


//fake data
const users = [
    {name: "Kevin", age : 11, _id: uuid()},
    {name: "Bill", age : 11, _id: uuid()}, 
    {name: "Steve", age : 11, _id: uuid()},
    {name: "Mark", age : 18, _id: uuid()},
    {name: "Sally", age : 11, _id: uuid()},
    {name: "Marsha", age : 11, _id: uuid()}
]

PeopleRouter.route("/")
    .get( ( req, res ) => {
    res.send(users);
})
    .post( ( req, res ) => {
    const newUser = { ...req.body, _id: uuid() };
    users.push( newUser );
    res.send(`User ${ newUser.name } was added to the database.`)
})

module.exports = PeopleRouter;

