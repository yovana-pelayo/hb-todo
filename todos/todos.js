import { checkAuth, createTodo, getToDos, logout, completeTodo } from '../fetch-utils.js';
import { renderToDo } from '../render-utils.js';

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');
checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
   

async function renderToDos() {
    const todoListEl = document.getElementById('todo-list');
    todoListEl.textContent = '';
    const todos = await getToDos();
    console.log(todos);
    for (let todo of todos) {
        const li = renderToDo(todo);
        li.addEventListener('click', async() => {
            await completeTodo(todo.id);
            renderToDos();
        });
        todoListEl.append(li);   
    }
} 
renderToDos();
todoForm.addEventListener('submit', async(e) => { 
    e.preventDefault();
    const data = new FormData(todoForm);
    console.log(data.get('todo'));
    await createTodo(data.get('todo'));
    renderToDos();
    todoForm.reset();
//     // on submit, create a todo, reset the form, and display the todos
});
    