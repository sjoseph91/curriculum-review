const express = require("express");
const MenuRouter = express.Router();
const {v4: uuid} = require("uuid");
const {menu, getData} = require("./fakeDatabase");



MenuRouter.route("/")
    .get((req, res) => {
        const hasQueryString = Object.keys(req.query).length !== 0;

        if (hasQueryString){
            const selector = Object.keys(req.query)[0];
            const value = Object.values(req.query)[0];
            const filteredData = getData(selector, value);
            res.send(filteredData);
        }else{
            res.send(menu);
        }
    })
module.exports = MenuRouter;