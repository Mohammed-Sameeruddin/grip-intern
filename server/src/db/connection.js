const mongoose = require("mongoose");
mongoose.connect("<Enter your Connection>",{
    useFindAndModify:false,
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("db connected");})
.catch((err)=>{console.log("db not connected");})

module.exports = mongoose;

