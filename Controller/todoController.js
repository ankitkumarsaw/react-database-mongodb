const Todo = require('../models/todoSchema');
const db = require('../db')
const getAll = async (req, res) =>{
    try{
    const user = req.user._id
    const todo = await Todo.find({user});
   return res.status(200).send({ message: 'All todo', todo})
    } catch(err){
       return res.status(500).send({ message: err.message });
    }
}

const addNewTodo = async (req, res) =>{
   try{
    const data = {
        user: req.user._id,
        todo: req.body.todo
    }
    const todo = await new Todo(data);
    todo.save();
    return res.status(201).send({ message: 'Todo added successfully', todo })
   } catch (err) {
      return res.status(500).send({ message: err.message });
   }
}

const updateTodo = async (req, res) =>{
    try {
        const { _id: userId } = req.user
        const data = req.body
        console.log(data)
        const todo = await Todo.findOne({ _id: data._id })

        if(todo.user !== userId) return res.status(403).send({ message: "Tere baap ka todo hai saale" })
            
        todo.todo = data.todo || todo.todo;
        await todo.save();
       return res.status(200).send({ message: 'Todo updated'})
    } catch (err) {
        return res.send(err.message)
    }
}

const deleteTodo = async(req, res) =>{
   try {
       const { _id: userId } = req.user
       const { id } = req.params
        const todo = await Todo.findOne({ _id: id })
        if (todo.user !== userId) return res.status(403).send({ message: 'Forbidden' })
        await Todo.deleteOne({_id: id})
        res.status(201).send({ message: 'Todo deleted'})
   } catch (err) {
       res.send(err.message)
   }
}

module.exports ={
    getAll,
    addNewTodo,
    updateTodo,
    deleteTodo,

}