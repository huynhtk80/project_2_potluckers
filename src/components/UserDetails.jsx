import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(event) {
    // event.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/home";
  }

  componentDidMount() {
    fetch("http://localhost:4000/auth/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        Name<h1>{this.state.userData.fname}</h1>
        Email <h1>{this.state.userData.email}</h1>
        <button onClick={this.handleclick}>Signout</button>
      </div>
    );
  }
}
