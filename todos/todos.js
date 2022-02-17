import { checkAuth, createTodo, getToDos, logout, completeTodo } from '../fetch-utils.js';
import { renderToDo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

async function renderToDos() {
    const todoListEl = document.getElementById('todo-list');
    todoListEl.textContent = '';
    const todos = await getToDos();
    for (let todo of todos) {
        const li = renderToDo(todo);
        li.addEventListener('click', async () => {
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
    await createTodo(data.get('description'));
    renderToDos();
    todoForm.reset();
    // on submit, create a todo, reset the form, and display the todos
});

async function displayTodos() {
    // fetch the todos
    
    // display the list of todos

    // be sure to give each todo an event listener

    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos

    // then refetch and display the updated list of todos
});
