import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import { workTodos, homeTodos } from "./seedData";

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
