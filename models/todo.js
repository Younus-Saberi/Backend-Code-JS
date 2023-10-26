const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        todo:{
            type:String,
            required:true,
        }, 
        description:{
            type:String,
            required:true,
        },
        createdData:{
            type:Date,
            required:true,
            default: Date.now(),
        }, 
        updateDate:{
            type: Date,
            required:true,
            default: Date.now(),
        },
    },
    {timestamps: true}
);

const todo = mongoose.model("todoSchema", todoSchema);

module.exports = todo;