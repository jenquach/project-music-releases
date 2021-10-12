import React from "react";

import AlbumTitle from "./AlbumTitle"
// import Artist from ""./Artist"

const Album = () => {
	return (
		<div className="albums">
    	<img src="https://i.scdn.co/image/a8b8d0bd26dc496f5b9ea65994172c5d541aa1b9" alt="img-info"/>
			<h2>Album title</h2>
			{/* <AlbumTitle/> */}
			<p>Artist</p>
			{/* <Artist /> */}
			
		</div>
	);
};

export default Album