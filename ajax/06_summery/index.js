import { todoService } from './todo-service.js';

const btn = document.querySelector('#btn-load');
const statusEl = document.querySelector('#status');
const listEl = document.querySelector('#todo-list');

btn.addEventListener('click', loadTodos);

async function loadTodos() {
  statusEl.textContent = 'loading...';
  listEl.innerHTML = '';

  try {
    const todos = await todoService.getTodos();
    statusEl.textContent = `loaded ${todos.length} todos`;
    render(todos.slice(0, 10));
  } catch (error) {
    statusEl.textContent = `error: ${error.message}`;
  }
}

function render(todos) {
  for (const todo of todos) {
    const li = document.createElement('li');
    li.textContent = todo.title;
    li.classList.toggle('done', todo.completed);
    listEl.append(li);
  }
}
