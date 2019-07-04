import React, { Component } from "react";

const API_ADRESS = "https://spotify-api-wrapper.appspot.com";
export default class App extends Component {
  state = { artistQuery: "" };

  updateArtistQuery = event => {
    console.log(event.target.value);
    this.setState({ artistQuery: event.target.value });
  };
  searchArtist = () => {
    console.log("this.state", this.state);
    fetch(`${API_ADRESS}/artist/${this.state.artistQuery}`)
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
      });
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
