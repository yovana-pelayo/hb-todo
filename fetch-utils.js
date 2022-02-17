const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// eslint-disable-next-line no-unused-vars
export async function createTodo(description) {
    const resp = await client.from('todo').insert({ description });
    
    // create a single incomplete todo with the correct 'todo' property for this user in supabase
    return checkError(resp);
}
// 
export async function deleteAllTodos() {
    // delete all todos for this user in supabase

    return checkError(resp);
}

export async function getToDos() {
    // get all todos for this user from supabase
    const resp = await client.from('todos').select();
    return checkError(resp);

}

    

export async function completeTodo(id) {
    // find the and update (set complete to true), the todo that matches the correct id

    return checkError(response);
}

export async function getUser() {
    return client.auth.session();
}
function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./todos');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}


