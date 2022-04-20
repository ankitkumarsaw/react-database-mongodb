const express = require('express')
const router = express.Router()

const{ getAll, addNewTodo, updateTodo, deleteTodo } = require('../Controller/todoController')

router.get('/alltodo', getAll)
router.post('/addtodo', addNewTodo)
router.put('/updatetodo', updateTodo)
router.delete('/deletetodo/:id', deleteTodo)

module.exports = router