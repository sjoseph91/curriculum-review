const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["jedi", "sith"]
    }
})

module.exports = mongoose.model("Bounty", bountySchema)