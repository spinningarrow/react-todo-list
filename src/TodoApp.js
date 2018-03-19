import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      homeTodos: ["buy milk", "drink juice", "eat lunch"],
      workTodos: ["learn react", "learn javascript"]
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
