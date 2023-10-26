const mytodo = require("../models/todo");

exports.getSingleTodo = async (req,res)=>{

    const id = req.params.id;
    const response = await mytodo.findById({_id:id});

    try{
        if(!response){
            return res
                .status(400)
                .json({success:false, message:"Todo not found"});
        }
        res.status(200).json({success:true, data:response, message: "Todo found"});
    }catch(err){
        res.status(400).json({success:false, data:err, message:"Todo not found"});
    }
}