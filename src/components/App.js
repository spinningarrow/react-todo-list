import React from "react";
import { todos } from "../utils/seedData";

class App extends React.Component {
  state = {
    todos: todos,
    newTodo: { description: "", isCompleted: false }
  };

  handleSubmit = event => {
    event.preventDefault();

    const todos = [...this.state.todos, this.state.newTodo];

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
        <h1 id="todo-title">So much to do!</h1>

        {this.state.todos.map((todo, i) => {
          return <li key={i}>{todo.description}</li>;
        })}

        <p>
          Add todo:
          <input
            id="inputText"
            type="text"
            value={this.state.newTodo.description}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </p>
      </div>
    );
  }
}

export default App;
