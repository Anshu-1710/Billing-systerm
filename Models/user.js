const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// yaha pe humne table ka schema (structure) banaya hai .
const UserSchema = new Schema({
    firstName : String ,
    lastName : String ,
    userName : String, 
    role :{
        type : String,
        enum : ['admin' , 'Master']
    },
    phone : Number ,
    email : String,
    password : String,

});

const User = mongoose.model('User' , UserSchema);  // yaha pe humne model create kiya 

// model ki help se we can perform various operations like CRUD . it is an object where various method exist

module.exports = User;      // yaha pe hum user model ko export kar rahe hai.                                                                                                