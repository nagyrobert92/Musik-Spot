import React, { Component } from "react";

export default class App extends Component {
  state = { artistQuery: "" };

  updateArtistQuery = event => {
    console.log("event", event);
  };
  render() {
    return (
      <div>
        <h1>Musik Spot</h1>
        <input
          onChange={this.updateArtistQuery}
          placeholder="search for an Artist"
        />
        <button>Search</button>
      </div>
    );
  }
}
