const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [2, "name must be longer than that"]
    },

    email :{
        type: String
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;