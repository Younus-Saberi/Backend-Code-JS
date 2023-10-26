const mytodo = require('../models/todo');

exports.updateTodo = async (req,res)=>{

    try {
        const id = req.params.id;
        const {todo,description} = req.body;
        const response = await mytodo.findByIdAndUpdate({_id:id}, {todo: todo, description: description, updatedAt: Date.now()});
        res.status(201).json({success:true, data:response, message:"Todo updated"});
    } catch (error) {
        res.status(400).json({success:false, data: error, message: "Todo not updated"});
    }

}