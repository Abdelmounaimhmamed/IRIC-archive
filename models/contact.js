const mongoose = require("mongoose");
const ContactSchema = new  mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String ,
        required : true
    },
    suggestion : {
        type : String,
        required : true
    }
},{
    timeTamps : true
})

module.exports = mongoose.model("Contact" , ContactSchema)

