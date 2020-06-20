const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
       type : String,
       required : true,
       min : 8
    },
    userId : {
        type : String,
        required : true,
        min : 8
    },
    email : {
        type : String,
        required : true,
        min : 8
    },
    password : {
        type : String,
        required : true,
    }
});

const User = mongoose.model('user',UserSchema);

module.exports = User;