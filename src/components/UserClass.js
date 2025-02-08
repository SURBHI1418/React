import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy data",
        location: "Default",
        avatar_url: "https://www.thoughtco.com/images-not-loading-4072206",
        bio: "React-Deveplor",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SURBHI1418");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card-container">
        <img src={avatar_url} />
        <h2>Name : {name} </h2>
        <h3>Location : {location}</h3>
        <p>About : {bio}</p>
        <h1>Count :{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}
export default UserClass;
