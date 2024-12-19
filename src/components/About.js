// import UserClass from "./UserClass";
import React from "react";
import User from "./User";

//  import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <div>
        <h1>Class About Us </h1>
        <h2>This is Website using React.</h2>
        <User />
        {/* <User name={'Surbhi Kumari(function)'} location={'Bangalore'}/> */}
      </div>
    );
  }
}

export default About;
