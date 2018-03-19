import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1 id="todo-title">{this.props.title}</h1>

        {this.props.todos.map(function(element) {
          return <li>{element}</li>;
        })}
      </div>
    );
  }
}

// extends React.Component
// class syntax
// implement render()
// prefix `props` with `this` (i.e. this.props)

export default TodoList;
