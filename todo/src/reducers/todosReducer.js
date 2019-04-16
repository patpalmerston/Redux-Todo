//Reducers
import { ADD_TODO } from '../actions'

const initialState = {
  todos: [
    {
      value: 'Clean the House.',
      completed: false
    },
    {
      value: 'Pick up the Kiddo.',
      completed: false
    },
    {
      value: 'Buy Flowers for the wife.',
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TODO:

    return {
      ...state,
      todos: [...state.todos, {
        value: action.payload,
        completed: false
      }]
    }

    default: return state;
  }
}

export default reducer