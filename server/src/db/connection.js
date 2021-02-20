const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://myself:mypassword118@mern.l94fl.mongodb.net/grip?retryWrites=true&w=majority",{
    useFindAndModify:false,
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("db connected");})
.catch((err)=>{console.log("db not connected");})

module.exports = mongoose;

