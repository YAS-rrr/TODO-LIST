// app/models/todoModel.js
let todos = [];

const findAll = () => todos;

const create = (title, description) => {
  const newTodo = { 
    id: Date.now(), 
    title, 
    description 
  };
  todos.push(newTodo);
  return newTodo;
};

const findById = (id) => todos.find(t => t.id === parseInt(id));

const update = (id, titolo, descrizione) => {
  const todo = findById(id);
  if (todo) {
    todo.title = titolo;
    todo.description = descrizione;
    return todo;
  }
  return null;
};

const deleteTodo = (id) => {
  todos = todos.filter(t => t.id !== parseInt(id));
};

export { findAll, create, findById, update, deleteTodo };