import React from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should call function supplied via props", () => {
    const mockHandler = jest.fn();
    const wrapper = shallow(<TodoForm submitTodo={mockHandler} />);

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(mockHandler).toBeCalled();
  });

  it("should setState when key is pressed", () => {
    const wrapper = shallow(<TodoForm />);

    wrapper.find("#inputText").simulate("change", { target: { value: "a" } });

    expect(wrapper.state().newTodo.description).toEqual("no");
  });
});
