import React from "react";
const Welcome = props => {
  console.log(props);
  return <h1>Hello {props.lunch}</h1>;
};

export default Welcome;
