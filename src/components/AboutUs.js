import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  render() {
    console.log("render called");
    return (
      <h1>
        <User name="Mukul Bhatt functional component" />
        <UserClass
          name="Mukul Bhatt class based component"
          location="Champawat"
        />
        <UserClass
          name="Mike Tysonclass based component"
          location="USA"
        />
      </h1>
    );
  }
}

export default AboutUs;
