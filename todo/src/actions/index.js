//Actions

export const ADD_TODO = 'ADD_TODO';




export function addTodo(newTodo) {
  console.log('new Todo', newTodo);
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}