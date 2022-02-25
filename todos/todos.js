import { checkAuth, createTodo, getToDos, logout, completeToDo, deleteAll } from '../fetch-utils.js';
import { renderToDo } from '../render-utils.js';
checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
   

const todoListEl = document.getElementById('todo-list');

async function displayTodos() {
    todoListEl.textContent = '';

    const todos = await getToDos();
    for (let todo of todos) {
        const li = renderToDo(todo);
        li.addEventListener('click', async() => {
            await completeToDo(todo.id);
            displayTodos();
        });
        todoListEl.append(li);  
    }
}
    
const form = document.getElementById('todo-form');
form.addEventListener('submit', async(e) => { 
    e.preventDefault();
    const data = new FormData(form);
    // console.log('data', data.get('todo'));
    await createTodo(data.get('description'));
    displayTodos();
    form.reset();
//     // on submit, create a todo, reset the form, and display the todos
});


const deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', async() => {
    await deleteAll();
});
displayTodos();
