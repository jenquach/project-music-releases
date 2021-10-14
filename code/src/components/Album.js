import React from "react";
// import Artist from "components/Artist";

// const Album = (props) => {
// console.log(props.title)
// 	return (
// 		<div className="artistcard-container">
// 		<div className="artistcard">
// 			<div className="albumcover">
// 				<a href={props.albumContent.external_urls.spotify}>
// 				<img src={props.albumContent.images[1].url} className="albumimg" alt="albumcover" /></a>


// 			<h2>title {album.title}</h2>
// 			</div>
// 		</div>	
// 		</div>		
// 	)		
// };


const Album = (album) => {
	return (
			<div className="card"> 
				<div className="cover">
				<a href={album.albumurl}>         
					<img className="image" src={album.cover} alt="album cover"/></a>
					
			</div>
					<h2 className="albums-name">{album.name}</h2>
					<div>
					<a className="link" href={album.externalurls}>
					<h3 className="artist-name">{album.artist}</h3></a>           
			</div>
			</div>

	)
}

 
export default Album