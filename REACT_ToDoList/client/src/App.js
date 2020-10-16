import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {v4 as uuid} from 'uuid';
import axios from 'axios';

import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({todos: res.data}))
  }

  // Toggle Complete
  markComplete = (id) => {
    // match id passed in and update completed value when checked
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id == id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // Delete Todo
  delTodo = (id) => {
    // filter method loops through and based on condition returns another array
    // ... = spread operator which copies everything
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header></Header>
            {/* Need to use props to load both AddTodo and Todos in a single path */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
              </React.Fragment>
            )}>
            </Route>
            <Route path="/about" component={About}></Route>
            
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
