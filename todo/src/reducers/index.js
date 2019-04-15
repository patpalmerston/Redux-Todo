

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  console.log(action)

  return state;
}