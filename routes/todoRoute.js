import express from 'express';
const router = express.Router();
import { home, todoView, listTodos, createTodo, updateTodo, deleteTodo } from '../app/controllers/todoController.js';

// Rotte per le pagine EJS
router.get('/', home);
router.get('/todoView', todoView);

// Rotte API
router.get('/api/todos', listTodos);
router.post('/api/todos', createTodo);
router.put('/api/todos/:id', updateTodo);
router.post('/todos/update/:id', updateTodo); 
router.delete('/api/todos/:id', deleteTodo);

export default router;