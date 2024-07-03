const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());

mongoose.connect("mongodb+srv://anshukns0317:1212@cluster0.chzni8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("dB is connected");
    })
    .catch((err)=>{
        console.log("something went wrong" , err);
    })
    

app.use("/auth" , authRoutes);



app.listen(3000 , ()=>{
    console.log("port is running at 3000");
});