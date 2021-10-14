import React from "react";
import data from "./data.json";
import Album from "components/Album";
import Header from "components/Header";

// import css from "index.css";


const albumArray = data.albums.items

export const App = () => { 
	return (
    <>
      <Header/>
      <div className="container">
      {albumArray.map((album) => {
        return (
          <Album 
            key={album.name} 
            title={album.name} 
            cover={album.images[0].url} 
            albumurl={album.external_urls.spotify} 
            artist={album.artists.map((item) => 
            <a className="link" key={item.name} href={item.external_urls.spotify}><h3 className="artist-name">{item.name}</h3></a>
           )
       }
          />
        )
      })}
      </div>
    </>
  )
}
