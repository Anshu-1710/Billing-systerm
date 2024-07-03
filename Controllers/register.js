const User = require("../Models/user.js");

const register = async (req , res) => {
    const {firstName , lastName , userName , role , email , password , phone}=req.body;
}

const login = async (req , res) =>{
    res.send("hi from login");
}

module.exports = {
    register,
    login
}