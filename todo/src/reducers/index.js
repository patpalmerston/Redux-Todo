

//Reducers
import { ADD_TODO, TOGGLE_TODO } from '../actions'

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

export default (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case ADD_TODO:

      return {
        ...state,
        todos: [...state.todos, {
          value: action.payload,
          completed: false
        }]
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload)
            return {...todo, completed: !todo.completed}

          return todo;
        })
      }

    default: return state;
  }
}

