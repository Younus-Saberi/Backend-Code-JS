const express = require('express');
const app = express();
const connectDB = require("./config/db");
const router = require("./routes/router");
const morgan = require("morgan");

connectDB();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.listen(process.env.PORT, (err) => {
    console.log(`Server running on port ${process.env.PORT}`);
    if(err){
        console.log("Error in connecting to server");
    }
});
