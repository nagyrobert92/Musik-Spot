import React, { Component } from "react";

export default class App extends Component {
  state = { artistQuery: "" };

  updateArtistQuery = event => {
    console.log(event.target.value);
    this.setState({ artistQuery: event.target.value });
  };
  searchArtist = () => {
    console.log("this.state", this.state);
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.setState({ artistQuery: event.target.value });
      this.searchArtist();
    }
  };
  render() {
    return (
      <div>
        <h1>Musik Spot</h1>
        <input
          onChange={this.updateArtistQuery}
          placeholder="search for an Artist"
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}
