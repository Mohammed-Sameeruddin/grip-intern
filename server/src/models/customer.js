const mongoose = require('mongoose');

const mernSchema = mongoose.Schema({
    accno : {
        type : Number,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})

const Customer = new mongoose.model("customer",mernSchema);

module.exports = Customer;