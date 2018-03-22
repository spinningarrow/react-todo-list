import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import TodoForm from "../todo-form/TodoForm";
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
        <h1 id="todo-title">THIS IS A BAD APP!!</h1>
        {this.state.todos.map(function(todo, i) {
          return <li key={i}>{todo.description}</li>;
        })}
        <TodoForm submitTodo={this.submitTodo.bind(this)} />
      </div>
    );
  }

  submitTodo(newTodo) {
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos: todos });
  }
}

export default TodoList;
