import React from "react";
import { todos } from "../utils/seedData";

class App extends React.Component {
  state = {
    todos: todos,
    newTodo: { description: "", isCompleted: false }
  };

  toggleTodo = (event, todo) => {
    todo.isCompleted = !todo.isCompleted;

    this.setState({
      todos: this.state.todos
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const todos = this.state.todos.concat(this.state.newTodo);

    this.setState({
      todos: todos,
      newTodo: { description: "", isCompleted: false }
    });
  };

  handleChange = event => {
    this.setState({
      newTodo: { description: event.target.value, isCompleted: false }
    });
  };

  render() {
    return (
      <div id="todo-list">
        <h1>so much to do</h1>

        <p>
          <input
            id="inputText"
            type="text"
            value={this.state.newTodo.description}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add</button>
        </p>

        <ul>
          {this.state.todos.map((todo, i) => {
            const className = todo.isCompleted ? "complete" : "";

            return (
              <li
                key={i}
                className={className}
                onClick={event => this.toggleTodo(event, todo)}
              >
                {todo.description}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
