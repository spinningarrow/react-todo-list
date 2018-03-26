import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoForm from "../todo-form/TodoForm";

describe("TodoList", () => {
  it("should render TodoList properly", () => {
    const wrapper = shallow(<TodoList title="a title" />);

    expect(wrapper.find("#todo-list")).toHaveLength(1);
    expect(wrapper.find("#todo-title")).toHaveLength(1);
    expect(wrapper.find("li")).toHaveLength(wrapper.state().todos.length);
    expect(wrapper.find(TodoForm)).toHaveLength(1);
    expect(wrapper.find("#todo-title").props().children).toEqual("a title");
  });

  it("should add a new todo when submitTodo is called", () => {
    const newTodo = { description: "bla", isCompleted: false };
    const wrapper = shallow(<TodoList title="a title" />);
    const expectedLength = wrapper.state().todos.length + 1;

    // recommended method: invoking handler via props
    wrapper
      .find("TodoForm")
      .props()
      .submitTodo(newTodo);

    // not recommended method: invoking method directly
    // wrapper.instance().submitTodo(newTodo);

    expect(wrapper.state().todos).toHaveLength(expectedLength);
  });
});
