const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        
    },
    name: {
        type: String,
    },
})

const UserDetail = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = UserDetail;
 