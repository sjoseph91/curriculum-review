const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be more than 0!"],
        max: 10000
        
    }, 
    type: {
        type: String,
        enum: ["clothes", "cleaning", "home-goods", ],
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)