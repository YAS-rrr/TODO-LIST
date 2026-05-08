// routes/todoRoutes.js
import express from 'express';
const router = express.Router();
import { home, listTodos, createTodo, updateTodo, deleteTodo } from '../app/controllers/todoController.js';

// Rotte
router.get('/', home);
router.get('/todos', listTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);      // modifica
router.delete('/todos/:id', deleteTodo);   // elimina

export default router;