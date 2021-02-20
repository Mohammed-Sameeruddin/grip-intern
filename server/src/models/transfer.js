const mongoose = require('mongoose');

const mernSchema = mongoose.Schema({
    to : {
        type : Number,
        required : true,
    },
    amount : {
        type : Number,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
    time : {
        type : String,
        required : true,
    }
})

const Transfer = new mongoose.model("transfer",mernSchema);

module.exports = Transfer;