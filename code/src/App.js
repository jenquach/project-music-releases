import React from "react";
import data from "./data.json";
import Album from "components/Album";
import Header from "components/Header";

// import css from "index.css";

export const App = () => { 
	return (
    <>
      <Header/>
      {data.albums.items.map((album) => (
      <Album
        key={album.id}
        title={album.name}
        artist={album.artists}
        />
      ))}
    </>  
  )
}
