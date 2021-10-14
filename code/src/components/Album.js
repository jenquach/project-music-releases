import React from "react";
import { ReactComponent as LogoOne } from 'icons/heart.svg'
import { ReactComponent as LogoTwo } from 'icons/play.svg'
import { ReactComponent as LogoThree } from 'icons/dots.svg'
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
		<div className="albums">

		<div className="img-container">
			<div className="overlay">
		
		
		<div className="logoTypeHeart"> <LogoOne /> </div>
		<div className="logoTypePlay"> <LogoTwo /> </div>
		<div className="logoTypeDot"> <LogoThree /> </div>
					
				
					
					</div>
				      
					<img className="image" src={album.cover} alt="album cover"/>
					
			</div>

			 
		
			<div className="AlbumTextContainer">
		

					<h2 className="AlbumTitle"> {album.name} </h2>
					<h3 className="ArtiistName">{album.artist}</h3>
					
					</div>
						          
			
			
			</div>

	)
}

 
export default Album