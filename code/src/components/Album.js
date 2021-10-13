import React from "react";
import Artist from "components/Artist";

const Album = (album) => {
console.log(album.title)

	return (
		<div className="cards">
    	{/* <img src={album.img} alt="img-info"/> */}
			<h2>title {album.title}</h2>
			<Artist artists/>

			{/* <h3 className="artist-name"> <Artist artists = {Artist.name} /></h3> */}
		</div>		
	)		
};
 
export default Album
