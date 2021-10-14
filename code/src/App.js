import React from "react";
import data from "./data.json";
import Album from "components/Album";
import Header from "components/Header";

import css from "index.css";


const albumArray = data.albums.items

export const App = () => { 
	return (
    <div className="container">
      <Header/>
    <div className="album-container">


      {albumArray.map((album) => {
        return (
          <Album 
            key={album.name} 
            title={album.name} 
            cover={album.images[0].url} 
            albumurl={album.external_urls.spotify} 
            artist={album.artists.map((item) => 
            

              <div>  
               <div>
                  <a className="link" target="_blank" key={item.name} href={item.external_urls.spotify}>
                  <h2 className="AlbumTitle"> {album.name} </h2></a>
               </div>
            
            <div> 
                   <a className="link" target="_blank" key={item.name} href={item.external_urls.spotify}>
                   <h3 className="ArtiistName">{item.name}</h3></a>
            </div>
               </div>
           
           )
       }
          />
        )
      })}
    </div>
    </div>
  )
}
