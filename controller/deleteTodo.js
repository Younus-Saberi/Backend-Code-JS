const mytodo = require('../models/todo');

exports.deleteTodo = async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await mytodo.findByIdAndDelete({_id:id});
        res.status(201).json({success:true, data:response, message:"Todo deleted"});
    }catch(err){
        res.status(400).json({success:false, data:err, message:"Todo not deleted"});
    }
}