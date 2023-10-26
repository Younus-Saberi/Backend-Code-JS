const mytodo = require("../models/todo");

exports.getTodos = async(req, res)=>{
    try{
        const response = await mytodo.find({});
        res
            .status(200)
            .json({sucess:true, data:response, message:"All todos fetched successfully"});
    }
    catch(err){
        res.status(400).json({sucess: false , data: err, message:"Error in fetching todos"});
    }
}