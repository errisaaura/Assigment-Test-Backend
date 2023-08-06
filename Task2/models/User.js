const mongoose = require("mongoose")

const User = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type : String,
        required: true
    },
    birthdayDate: {
        type: Date,
        required:true
    },
    countryLocation : {
        type : String,
        required:true
    }
})
module.exports = mongoose.model('Users', User)