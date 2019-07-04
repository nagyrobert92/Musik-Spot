import React from "react";

const Artist = ({ artist }) => {
  if (!artist) return null;
  const { images, name, followers, genres } = artist;

  return (
    <div>
      <h3>{name}</h3>
      <h4>Followers:</h4> <p>{followers.total}</p>
      <h4>
        Genre: <br />
      </h4>
      <p>{genres.join(" | ")}</p>
      <img
        src={images[0] && images[0].url}
        alt="artist-profile"
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: "cover"
        }}
      />
    </div>
  );
};

export default Artist;
