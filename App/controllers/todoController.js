// app/controllers/todoController.js
import { findAll, create, findById, update, deleteTodo } from '../models/todoModel.js';

const home = (req, res) => {
  res.send('Benvenuto nella Todo List!');
};

const listTodos = (req, res) => {
  const todos = findAll();
  res.json(todos);
};

const createTodo = (req, res) => {
  const { title, description } = req.body;
  const newTodo = create(title, description);
  res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedTodo = update(id, title, description);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  deleteTodo(id);
  res.json({ message: 'Todo deleted successfully' });
};

export { home, listTodos, createTodo, updateTodo, deleteTodo };