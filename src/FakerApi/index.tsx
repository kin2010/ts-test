//fake data
export type todoType=string[]
const todos = ["Go to the store", "Write", "Code"];

//simulate api calls with a function to delay requests
function wait(timeInMS:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMS);
  });
}

export async function GetTodos() {
  await wait(1000);
  return [...todos];
}

export async function addTodo(todoDescription:string) {
  await wait(3000);
  todos.push(todoDescription);
}

export async function removeTodo(index:number) {
  await wait(3000);
  todos.splice(index, 1);
}