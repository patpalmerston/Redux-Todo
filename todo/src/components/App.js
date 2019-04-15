import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Pats Todo List!</h1>
        <p>{this.props.todosFromRedux}</p>
          
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todosFromRedux: state.todos
  }
}

export default connect(mapStateToProps, {})(App);
