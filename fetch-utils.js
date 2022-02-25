const SUPABASE_URL = 'https://swgiucfleoaonawjlvme.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Z2l1Y2ZsZW9hb25hd2psdm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTIxNjEsImV4cCI6MTk2MDAyODE2MX0.KwPiwmAFu_q_7yxOSUYv4k6Ejgu8uDsvfsGLixOpD9o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;

}
export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) {
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
// export async function deleteAllTodos() {
//     // delete all todos for this user in supabase

//     return checkError(resp);
// }

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}
export async function getToDos() {
    // get all todos for this user from supabase
    const resp = await client.from('todos').select().order('id');
    return checkError(resp);
}


export async function createTodo(description) {
    const resp = await client.from('todos').insert({ description, user_id: getUser().id });
    // console.log(resp);
    // create a single incomplete todo with the correct 'todo' property for this user in supabase
    return checkError(resp);
}
export async function completeToDo(id) {
    const resp = await client.from('todos').update({ complete: true }).match({ id });
    // find the and update (set complete to true), the todo that matches the correct id
    return checkError(resp);
}
function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}
export async function deleteAll() { 
    const response = await client.from('todos').delete().match({ user_id: getUser().id });
// console.log(id);
    return response;
}