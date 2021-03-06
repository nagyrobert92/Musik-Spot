import React, { Component } from "react";
import Artist from "./components/Artist";
import Tracks from "./components/Tracks";

const API_ADRESS = "https://spotify-api-wrapper.appspot.com";
export default class App extends Component {
  state = { artistQuery: "", artist: null, tracks: [] };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };
  searchArtist = () => {
    fetch(`${API_ADRESS}/artist/${this.state.artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          console.log("artist", artist);
          this.setState({ artist });

          fetch(`${API_ADRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
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
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}
