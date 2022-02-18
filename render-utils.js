export function renderToDo(todo) {
    const li = document.createElement('li');
    li.classList.add('complete');
    li.textContext = todo.description;
    return li;
    // create a div and a p tag
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')

    // add the 'todo' css class no matter what

    // put the todo's text into the p tag

    // append stuff

    // return the div
}