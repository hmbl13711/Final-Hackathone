const mongoose = require('mongoose');

const userSchema = mongoose.model('users', new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
    },
}));

module.exports = userSchema