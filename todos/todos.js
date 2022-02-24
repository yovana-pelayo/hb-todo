import { checkAuth, createTodo, getToDos, logout, completeToDo } from '../fetch-utils.js';
import { renderToDo } from '../render-utils.js';

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
    for (let todo of todos) {
        const li = renderToDo(todo);
        li.addEventListener('click', async() => {
            await completeToDo(todo.id);
            renderToDos();
        });
        todoListEl.append(li);  
    }
}
renderToDos();
    
const form = document.getElementById('todo-form');
form.addEventListener('submit', async(e) => { 
    e.preventDefault();
    const data = new FormData(form);
    // console.log('data', data.get('todo'));
    await createTodo(data.get('description'));
    form.reset();
//     // on submit, create a todo, reset the form, and display the todos
});

    // fetch the todos

    // display the list of todos

    // be sure to give each todo an event listener

    // on click, complete that todo


// add an on load listener that fetches and displays todos on load

deleteButton.addEventListener('click', async() => {
    // delete all todos

    // then refetch and display the updated list of todos
});