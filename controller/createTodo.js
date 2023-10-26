const mytodo = require("../models/todo");

exports.createTodo = async (req, res) => {
    try{
        const {todo, description}=req.body;
        const response = await mytodo.create({todo, description});
        res
            .status(201)
            .json({success:true, data: response, message:"Todo created successfully"});
    }
    catch(err){
        res
           .status(400)
           .json({success:false, data: err});
    }
};
