import React from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should call function supplied via props", () => {
    const mockHandler = jest.fn();

    const wrapper = shallow(<TodoForm submitTodo={mockHandler} />);

    expect(wrapper.find("form")).toHaveLength(1);
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(mockHandler).toBeCalled();
  });
});
