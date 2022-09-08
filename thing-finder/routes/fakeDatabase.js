const {v4: uuid} = require("uuid");

const menu = [
    {item: "Pizza", type: "main", price: 15, _id: uuid()},
    {item: "Burger", type: "main", price: 12, _id: uuid()},
    {item: "Salad", type: "side", price: 7, _id: uuid()},
    {item: "Fries", type: "side", price: 2, _id: uuid()},
    {item: "Cookie", type: "dessert", price: 1, _id: uuid()},
]

function getData(selector, value){
    console.log(selector, value);
    if (selector === "maxPrice"){
        return menu.filter(menuItem => menuItem.price < Number(value))
    }else if (selector === "minPrice"){
        return menu.filter(menuItem => menuItem.price > Number(value))
    }else{
        return menu.filter(menuItem => menuItem[selector].toString() === value);
    }
}

module.exports = {menu, getData}