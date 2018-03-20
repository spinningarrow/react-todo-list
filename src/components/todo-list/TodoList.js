import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {this.state.todos.map(function(todo, i) {
          return <li key={i}>{todo.description}</li>;
        })}
      </div>
    );
  }
}

export default TodoList;
