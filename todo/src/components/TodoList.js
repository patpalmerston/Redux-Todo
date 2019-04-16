import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';



class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addTodo = () => {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pats Todo List!</h1>
        
        <input 
          type='text' 
          name='todo' 
          value={this.state.todo} 
          placeholder='enter todo' 
          onChange={this.handleChange} />

          <button onClick={this.addTodo}>Add Todo</button>
          <h1>{this.props.todos.value}</h1>
          </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, { addTodo })(TodoList);