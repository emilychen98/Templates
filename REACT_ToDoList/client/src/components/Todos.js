import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; // Validation for properties a component can have

class Todos extends Component{

    render(){
        // Loop through each todo item in todos which is passed in
        // through App.js
        return this.props.todos.map((todo)=>(
            // curly braces = JS
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
            delTodo={this.props.delTodo}></TodoItem>
        ));
    }
}

// Prop Types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.array.isRequired
}

export default Todos;
