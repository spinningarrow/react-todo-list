import React, { Component } from "react";
import TodoList from "../todo-list/TodoList";
import { workTodos, homeTodos } from "../../utils/seedData";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      homeTodos: workTodos,
      workTodos: homeTodos
    };
  }

  render() {
    return (
      <div>
        <TodoList title="home todos" todos={this.state.homeTodos} />
        <TodoList title="work todos" todos={this.state.workTodos} />
      </div>
    );
  }
}
export default TodoApp;
