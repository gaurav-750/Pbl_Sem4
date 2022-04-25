//requiring mongoose:
const mongoose = require('mongoose');


//create a User Schema:
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    }
}, {
    timestamps: true //when the user was created
    }
)

//User Model:
const User = mongoose.model('User', userSchema);

//exporting our model:
module.exports = User;