import { findAll, create, findById, update, deleteTodo as deleteTodoModel } from '../models/todoModel.js';

const home = (req, res) => {
  res.render('index'); // Renderizza app/views/index.ejs
};

const todoView = (req, res) => {
  const todos = findAll();
  res.render('todoView', { todos }); // Passa i dati alla view
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
  deleteTodoModel(id);
  res.json({ message: 'Todo deleted successfully' });
};

export { home, todoView, listTodos, createTodo, updateTodo, deleteTodo };