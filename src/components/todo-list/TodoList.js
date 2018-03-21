import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      newTodo: { description: "", isCompleted: false }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {this.state.todos.map(function(todo, i) {
          return <li key={i}>{todo.description}</li>;
        })}
        <form onSubmit={this.handleSubmit}>
          <label>
            Add todo:
            <input
              type="text"
              value={this.state.newTodo.description}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      newTodo: { description: event.target.value, isCompleted: false }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos: todos });
    this.setState({ newTodo: { description: "", isCompleted: false } });
  }
}

export default TodoList;
